import React from 'react';
import CardCarrusel from './CardCarrusel';
import CarruselPersonas from './CarruselPersonas';
import './styles/home.css';

const Home = () => {
  const secciones = [
    {
      title: 'Cursos',
      photos: ['/images/IMG_9999.png', '/images/Jordi-11.jpg'],
    },
    {
      title: 'Eventos',
      photos: ['/images/IMG_9999.png', '/images/Jordi-11.jpg'],
    },
    {
      title: 'Productos',
      photos: ['/images/IMG_9999.png', '/images/Jordi-11.jpg'],
    },
  ];
  return (
    <div className="home">
      <div className="imagen">
        <div className="presentacion">
          <h1>Panambi Holos</h1>
          <div className="parrafo">
            <h3>Como te podemos ayudar</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus,
              vitae soluta voluptates est quae repellat maiores optio impedit quo
              nulla animi fugiat sunt fugit ratione vel labore veniam porro eius?
            </p>
            <br />
            <h4>Que hacemos</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat deserunt
              veniam tempore? Perferendis quia recusandae cum deserunt animi quasi
              consequuntur aspernatur consequatur ex, aut eum maxime aliquam
              accusantium eligendi ipsa?
            </p>
          </div>
        </div>
      </div>
      
      <div className="encontramos">
        <h2>Que podes encontrar</h2>
        <div className="contenedor-carrusel">
          {secciones.map((seccion, index) => (
            <CardCarrusel
              key={index} // Es importante agregar una key cuando se mapea
              title={seccion.title}
              photos={seccion.photos}
            />
          ))}
        </div>
      </div>

      <div className="contiene-somos">
        <div className="fondoBlur"></div>
        <div className="somos">
          <div className="somos-content">
            <div className="carrusel-wrapper">
              <CarruselPersonas />
            </div>
            <div className="personasPanambi">
              <h1>Quienes somos</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt amet
                quasi expedita enim explicabo iure voluptatibus doloremque, quisquam
                aspernatur nemo dolorem reiciendis dolores harum ut nesciunt, sit
                at. Eaque, beatae.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;