import './App.css'

function App() {

  return (
<>
<div className="sky-image">
  <a href="https://pgscom.github.io">
    <img src="images/logo perfil sin fondo.png" height="45" alt="Logo PGSCOM" href="https://pgscom.github.io" />
  </a>
</div>
<div className="featured" style={{ height: '95%' }}>
  <div id="video" style={{ height: '45%' }}>
    <video id="elvideo" className="hijo" playsInline muted loop autoPlay height="100%" src="images/Agua.mp4"></video>
  </div>
  <div className="featured-details">
    <h1 style={{textAlign: 'center'}} className="featured-title">Agua</h1>
    <ul className="tags">
      <li className="tag"> Hecho en 2022 </li>
      <li className="tag"> Efectos especiales </li>
      <li className="tag"> Festival de cortometrajes de Manos Unidas </li>
      <li className="tag"> 🤿 </li>
    </ul>
  </div>
</div>
<div className="featured-actions">
  <a href="https://youtu.be/J-APNXRvc1I" target="_blank" style={{ color: 'black' }} className="button icon-play">Reproducir</a>
</div>
<main>
  <div className="list">
    <h2 className="list-title">Contenidos:</h2>
    <div className="list-content">
      <div className="list-item">
        <a href="https://open.spotify.com/episode/64iw8E3LVprQ1VNL0S0vjd?si=RkR754qpQmWlEX1UhCLEVg" target="_blank">
          <img className="image" src="./images/covers/IA2.png" alt="Podcast IA Parte 2" />
        </a>
      </div>
      <div className="list-item">
        <a href="https://maculacsa.github.io/" target="_blank">
          <img className="image" src="./images/covers/macula2023.png" alt="Macula 2023" />
        </a>
      </div>
      <div className="list-item">
        <a href="https://www.youtube.com/watch?v=ICaswolrCSU" target="_blank">
          <img className="image" src="./images/covers/Tiempo.png" alt="Viaje en el Tiempo" />
        </a>
      </div>
      <div className="list-item">
        <a href="https://www.youtube.com/watch?v=d-5yZWw2bXM" target="_blank">
          <img className="image" src="./images/covers/DetrTiempo.png" alt="Detrás de Viaje en el Tiempo" />
        </a>
      </div>
      <div className="list-item">
        <a href="https://www.youtube.com/watch?v=BgDsmv8oj2c" target="_blank">
          <img className="image" src="./images/covers/DetrAgua.png" alt="Detrás de Agua" />
        </a>
      </div>
      <div className="list-item">
        <a href="https://open.spotify.com/episode/6VWNwpeM6isGiy6jw01oTd?si=5ec78af3beb24c8b" target="_blank">
          <img className="image" src="./images/covers/IA1.png" alt="Podcast IA Parte 1" />
        </a>
      </div>
      <div className="list-item">
        <a href="https://www.youtube.com/watch?v=J-APNXRvc1I" target="_blank">
          <img className="image" src="./images/covers/agua.png" alt="Corto Agua" />
        </a>
      </div>
      <div className="list-item">
        <a href="https://youtu.be/m6TqQVTNyBw" target="_blank">
          <img className="image" src="./images/covers/PGSCON2022.png" alt="PGSCON 2022" />
        </a>
      </div>
      <div className="list-item">
        <a href="https://www.youtube.com/watch?v=FRXkT3w5hAQ" target="_blank">
          <img className="image" src="./images/covers/Arquimedes.png" alt="Arquímedes" />
        </a>
      </div>
      <div className="list-item">
        <a href="https://www.youtube.com/watch?v=layOjJF7W6A" target="_blank">
          <img className="image" src="./images/covers/educacion.png" alt="Para que la educación no sea un sueño" />
        </a>
      </div>
    </div>
  </div>
</main>
<footer className="footer">
  <ul className="tab-list">
    <li className="tab-item">
      <a href="index.html">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2.09961L1 12H4V21H11V15H13V21H20V12H23L12 2.09961ZM12 4.79102L18 10.1914V11V19H15V13H9V19H6V10.1914L12 4.79102Z" />
        </svg>
        <span>Inicio</span>
      </a>
    </li>
    <li className="tab-item">
      <a href="proximamente.html">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0)">
            <path d="M4 3C2.897 3 2 3.897 2 5V19C2 20.103 2.897 21 4 21H12V19H4V5H20V13.2852L22 14.4082V5C22 3.897 21.103 3 20 3H4ZM6.00195 7V9H8V7H6.00195ZM16 7V9H18V7H16ZM6 11V13H8V11H6ZM15.0859 13C14.514 13.019 14 13.492 14 14.1445V22.8555C14 23.7255 14.9132 24.2764 15.6602 23.8574L23.4199 19.502C24.1939 19.067 24.1939 17.932 23.4199 17.498L15.6602 13.1426C15.4734 13.0378 15.2766 12.9937 15.0859 13ZM6 15V17H8V15H6Z" fill="black" />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <span>Próximamente</span>
      </a>
    </li>
  </ul>
</footer>
</>
  )
}

export default App
