import React from 'react';
import './Serie.css';

const Serie = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Series</a></li>
            <li><a href="#">Películas</a></li>
            <li><a href="#">Agregados recientemente</a></li>
            <li><a href="#">Mi lista</a></li>
          </ul>
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Avatar de Netflix" />
        </nav>
        <div className="hero">
          <h1>Detrás de las cámaras</h1>
          <button>Reproducir</button>
          <button>Agregar a Mi lista</button>
          <p>2023 . 3 temporadas . 25 capítulos</p>
          <p className="descripcion">Detrás de las cámaras es una serie documental que explora cómo se hacen algunas de las películas y series más populares de Netflix. En cada episodio, los espectadores podrán conocer a los actores, directores y equipos detrás de cámaras, así como los procesos y desafíos que enfrentan para llevar a cabo sus proyectos.</p>
        </div>
      </header>
      <section className="capitulos">
        <h2>Capítulos</h2>
        <div className="capitulo">
          <img src="https://picsum.photos/300/168?random=1" alt="Detrás del corto Agua con Aaron Sancibrián y Pablo García" />
          <div className="texto">
            <h3>Detrás del corto Agua con Aaron Sancibrián y Pablo García</h3>
            <p>En este episodio, se muestra cómo se hizo el cortometraje Agua, dirigido por Aaron Sancibrián y protagonizado por Pablo García. El episodio presenta entrevistas con el equipo de producción, así como escenas detrás de cámaras y anécdotas sobre la filmación.</p>
            <button>Reproducir</button>
            <button>Agregar a Mi lista</button>
          </div>
        </div>
        <div className="capitulo">
          <img src="https://picsum.photos/300/168?random=2" alt="Detrás del corto Viaje en el tiempo con Aaron Sancibrián y Pablo García" />
          <div className="texto">
            <h3>Detrás del corto Viaje en el tiempo con Aaron Sancibrián y Pablo García</h3>
            <p>En este episodio, se muestra cómo se hizo el cortometraje Viaje en el tiempo, dirigido por Aaron Sancibrián yproducido por Pablo García. El episodio presenta entrevistas con el equipo de producción, así como escenas detrás de cámaras y anécdotas sobre la filmación.</p>
            <button>Reproducir</button>
            <button>Agregar a Mi lista</button>
          </div>
        </div>
        <div className="capitulo">
          <img src="https://picsum.photos/300/168?random=3" alt="Detrás de los Macula con Pablo García" />
          <div className="texto">
            <h3>Detrás de los Macula con Pablo García</h3>
            <p>En este episodio, se muestra cómo se hizo la exitosa serie Los Macula, producida por Pablo García. El episodio presenta entrevistas con el equipo de producción, así como escenas detrás de cámaras y anécdotas sobre la filmación.</p>
            <button>Reproducir</button>
            <button>Agregar a Mi lista</button>
          </div>
        </div>
      </section>
      <footer>
        <ul>
          <li><a href="#">Preguntas frecuentes</a></li>
          <li><a href="#">Centro de ayuda</a></li>
          <li><a href="#">Términos de uso</a></li>
          <li><a href="#">Privacidad</a></li>
          <li><a href="#">Configuración de la cuenta</a></li>
        </ul>
        <p>Detrás de las cámaras © 2023 Netflix, Inc.</p>
      </footer>
    </div>
  );
};

export default Serie;
