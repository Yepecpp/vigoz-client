import React from 'react';
import Slider from '../../components/slider/Slider.c';
import Squares from '../../components/squares/Squares.c';

const SquaresData = [
  {
    imageUrl: 'aboutUs.jpg',
    name: 'Sobre Nosotros',
  },
  {
    imageUrl: 'contact.jpg',
    name: 'Contacto',
  },
  {
    imageUrl: 'services.jpg',
    name: 'Servicios',
  },
  {
    imageUrl: 'Hielo-marino.jpg',
    name: 'Hielo',
  },
  {
    imageUrl: 'poloSlide.jpg',
    name: 'Cubos',
  },
  {
    imageUrl: 'cuboHielo.jpg',
    name: 'Encargos',
  },
];
const Index = () => {
  return (
    <>
      <Slider />
      <div className="container_Squares">
        {SquaresData.map((square, index) => {
          return (
            <Squares
              key={index}
              imageUrl={'/media/slider/' + square.imageUrl}
              name={square.name}
            />
          );
        })}
      </div>
    </>
  );
};
/**/
export default Index;
