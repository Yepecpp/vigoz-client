import React from 'react';
import Slider from '../../components/slider/Slider.c';
import Squares from '../../components/squares/Squares.c';

const SquaresData = [
  {
    imageUrl: 'Hielo-marino.jpg',
    name: 'Hielo',
  },
  {
    imageUrl: 'hieloSlide.jpg',
    name: 'Hielo Marino',
  },
  {
    imageUrl: 'poloSlide.jpg',
    name: 'Hielo Azul',
  },
  {
    imageUrl: 'slide1.jpg',
    name: 'Hielo verde',
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
              imageUrl={'/media/Slider/' + square.imageUrl}
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
