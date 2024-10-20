import React from 'react';

const PGSCON2022 = () => {
  return (
    <div>
      <META HTTP-EQUIV="REFRESH" CONTENT="0;URL=https://youtu.be/m6TqQVTNyBw">
      <title>Cargando...</title>
      <style>
        @keyframes rotate {from {transform: rotate(0deg);}
            to {transform: rotate(360deg);}}
        @-webkit-keyframes rotate {from {-webkit-transform: rotate(0deg);}
          to {-webkit-transform: rotate(360deg);}}
        .imgr{
            -webkit-animation: 3s rotate linear infinite;
            animation: 3s rotate linear infinite;
            -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
        }

        body{
            background-color: #1abc9c;
            overflow: hidden;
        }

        .logo{
            display: flex;
            justify-content: center;
            align-items: center;
            
            position: absolute;
            top: 50%;
            transform: translate(50%, -50%);

            width: 490px;
            height: 335.983px;
        }
      </style>

      <div className="logo" style={{ width: '50%' }}>
        <img src="./images/logo perfil sin fondo.png" className="imgr" alt="Logo" />
      </div>
    </div>
  );
};

export default PGSCON2022;
