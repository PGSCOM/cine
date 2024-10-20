import React from 'react';

const Proximamente = () => {
  return (
    <div>
      <div style={{ position: 'relative' }} className="sky-image">
        <a href="https://pgscom.github.io">
          <img src="images/logo perfil sin fondo.png" height="45" alt="Logo PGSCOM" />
        </a>
      </div>

      <div className="featured" style={{ height: '95%' }}>
        <div id="video" style={{ height: '45%' }}>
          <video id="elvideo" className="hijo" playsInline muted loop autoPlay height="100%" src="images/Logo animado.mp4"></video>
        </div>
        <div className="featured-details">
          <h1 style={{ textAlign: 'center' }} className="featured-title">Proximamente...</h1>
        </div>
      </div>

      <main>
        <div className="list">
          <div className="list-content">
            <h1>;]</h1>
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
    </div>
  );
};

export default Proximamente;
