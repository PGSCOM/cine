// Integración de Astro: al terminar el build genera dist/muro.webp (2000×1125)
// y dist/og.jpg (1200×630, la Open Graph de la web). Las portadas de
// src/data/content.json se colocan en un muro inclinado en perspectiva.
//
// pgscom.es carga https://cine.pgscom.es/muro.webp como imagen del proyecto
// "Portfolio de cine", así que cada despliegue de esta web la actualiza allí
// también, sin tocar aquel repo.
//
// No hay navegador en el build de Cloudflare Pages, así que la perspectiva se
// calcula aquí: cada portada se proyecta como en CSS
// `perspective(P) rotateX rotateY rotateZ scale` y se dibuja con sharp como
// una transformación afín de sus tres esquinas. Se pierde la deformación
// trapezoidal dentro de cada portada, que a este tamaño no se nota.

import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import sharp from 'sharp';

const ANCHO = 2000;
const ALTO = 1125;
const COLUMNAS = 13;
const FILAS = 6;
const SALTO_FILA = 5; // desplaza cada fila para que no se repitan las portadas en vertical
// Medidas del plano antes de la proyección (en px de un viewport de 1600×900).
const ANCHO_MURO = 3000;
const HUECO = 20;
const RADIO = 12;
const PERSPECTIVA = 2400;
const GIRO = { x: 24, y: -14, z: 7 }; // grados
const ESCALA = 0.82;
const PIXELES = ANCHO / 1600; // de px CSS a px de la imagen final
// Tamaño al que se prepara cada portada antes de transformarla.
const BASE_ANCHO = 400;
const BASE_ALTO = 600;

const rad = (g) => (g * Math.PI) / 180;

// Punto del plano (x, y) → punto de la imagen final, centrado en el lienzo.
function proyectar(x, y) {
	x *= ESCALA;
	y *= ESCALA;
	let z = 0;
	const [cz, sz] = [Math.cos(rad(GIRO.z)), Math.sin(rad(GIRO.z))];
	[x, y] = [x * cz - y * sz, x * sz + y * cz];
	const [cy, sy] = [Math.cos(rad(GIRO.y)), Math.sin(rad(GIRO.y))];
	[x, z] = [x * cy + z * sy, -x * sy + z * cy];
	const [cx, sx] = [Math.cos(rad(GIRO.x)), Math.sin(rad(GIRO.x))];
	[y, z] = [y * cx - z * sx, y * sx + z * cx];
	const f = PERSPECTIVA / (PERSPECTIVA - z);
	return [ANCHO / 2 + x * f * PIXELES, ALTO / 2 + y * f * PIXELES];
}

async function prepararPortada(ruta) {
	const radio = (RADIO * BASE_ANCHO) / ((ANCHO_MURO - (COLUMNAS - 1) * HUECO) / COLUMNAS);
	const mascara = Buffer.from(
		`<svg width="${BASE_ANCHO}" height="${BASE_ALTO}"><rect width="100%" height="100%" rx="${radio}" ry="${radio}"/></svg>`,
	);
	return sharp(ruta)
		.resize(BASE_ANCHO, BASE_ALTO, { fit: 'cover' })
		.ensureAlpha()
		.composite([{ input: mascara, blend: 'dest-in' }])
		.png()
		.toBuffer();
}

export async function generarMuro(raiz, salida) {
	const datos = JSON.parse(await readFile(join(raiz, 'src/data/content.json'), 'utf8'));
	const portadas = await Promise.all(
		datos.content.map((c) => prepararPortada(join(raiz, 'public', c.image.replace(/^\.?\//, '')))),
	);

	const celdaAncho = (ANCHO_MURO - (COLUMNAS - 1) * HUECO) / COLUMNAS;
	const celdaAlto = celdaAncho * 1.5;
	const altoMuro = FILAS * celdaAlto + (FILAS - 1) * HUECO;
	// Margen alrededor del lienzo: las portadas de los bordes se salen de él.
	const MARGEN = 800;

	const capas = [];
	for (let fila = 0; fila < FILAS; fila++) {
		for (let col = 0; col < COLUMNAS; col++) {
			const x0 = col * (celdaAncho + HUECO) - ANCHO_MURO / 2;
			const y0 = fila * (celdaAlto + HUECO) - altoMuro / 2;
			const tl = proyectar(x0, y0);
			const tr = proyectar(x0 + celdaAncho, y0);
			const bl = proyectar(x0, y0 + celdaAlto);
			// sharp: x' = a·x + b·y, y' = c·x + d·y
			const a = (tr[0] - tl[0]) / BASE_ANCHO;
			const c = (tr[1] - tl[1]) / BASE_ANCHO;
			const b = (bl[0] - tl[0]) / BASE_ALTO;
			const d = (bl[1] - tl[1]) / BASE_ALTO;
			// La salida de affine es la caja que envuelve la portada transformada.
			const esquinas = [[0, 0], [BASE_ANCHO, 0], [0, BASE_ALTO], [BASE_ANCHO, BASE_ALTO]].map(([x, y]) => [a * x + b * y, c * x + d * y]);
			const left = Math.round(tl[0] + Math.min(...esquinas.map((p) => p[0])) + MARGEN);
			const top = Math.round(tl[1] + Math.min(...esquinas.map((p) => p[1])) + MARGEN);
			const portada = portadas[(col + fila * SALTO_FILA) % portadas.length];
			const input = await sharp(portada)
				.affine([a, b, c, d], { background: { r: 0, g: 0, b: 0, alpha: 0 }, interpolator: 'bicubic' })
				.png()
				.toBuffer();
			capas.push({ input, left, top });
		}
	}

	const vineta = Buffer.from(
		`<svg width="${ANCHO}" height="${ALTO}"><defs><radialGradient id="v" cx=".5" cy=".5" r=".75">` +
			`<stop offset=".45" stop-color="#000" stop-opacity="0"/><stop offset=".8" stop-color="#000" stop-opacity=".55"/>` +
			`<stop offset="1" stop-color="#000" stop-opacity=".9"/></radialGradient></defs>` +
			`<rect width="100%" height="100%" fill="url(#v)"/></svg>`,
	);

	const lienzo = await sharp({
		create: { width: ANCHO + 2 * MARGEN, height: ALTO + 2 * MARGEN, channels: 4, background: '#000' },
	})
		.composite(capas)
		.png()
		.toBuffer();
	const muro = await sharp(lienzo)
		.extract({ left: MARGEN, top: MARGEN, width: ANCHO, height: ALTO })
		.composite([{ input: vineta }])
		.flatten({ background: '#000' })
		.png()
		.toBuffer();

	await sharp(muro).webp({ quality: 82 }).toFile(join(salida, 'muro.webp'));
	await sharp(muro).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 85, mozjpeg: true }).toFile(join(salida, 'og.jpg'));
}

export default function muro() {
	return {
		name: 'muro',
		hooks: {
			'astro:build:done': async ({ dir, logger }) => {
				const raiz = fileURLToPath(new URL('..', import.meta.url));
				try {
					await generarMuro(raiz, fileURLToPath(dir));
					logger.info('muro.webp y og.jpg generados');
				} catch (e) {
					// Que una portada rota no tumbe el despliegue de la web entera.
					logger.warn(`No se pudo generar el muro: ${e.message}`);
				}
			},
		},
	};
}
