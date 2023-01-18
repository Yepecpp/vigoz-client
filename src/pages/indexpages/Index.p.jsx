import React from 'react';
import Slide from '../../components/Slider.c';
import Squares from '../../components/Squares';
const Index = () => {
  return (
    <>
      <Slide />
      <div className="container_Squares">
        <Squares imageUrl="/media/Slider/Hielo-marino.jpg" name="Hielo" />
        <Squares
          imageUrl="/media/Slider/Hielo-marino.jpg"
          name="Hielo Marino"
        />
        <Squares imageUrl="/media/Slider/poloSlide.jpg" name="Hielo Azul" />
      </div>
    </>
  );
};

export default Index;
