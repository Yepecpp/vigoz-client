import SlideAll from './SlideAll.jsx';

const Slider = () => {
  const slide = [
    '/media/Slider/img.jpg',
    '/media/Slider/img2.jpg',
    '/media/Slider/img3.jpg',
  ];

  return (
    <div className="container_slider">
      <SlideAll imageUrl={slide} />
    </div>
  );
};

export default Slider;
