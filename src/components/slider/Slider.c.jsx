import { useState } from 'react';
const SliderData = ['hieloSlide.jpg', 'slide1.jpeg', 'slide2.jpeg'];
import Pagination from './Pagination.c';
// Path to images

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return (
      <div className="slider">
        <h1>There is no images to show</h1>
      </div>
    );
  }
  return (
    <div className="container_slider">
      <div className="slider">
        {length > 0 && (
          <div className="slide">
            <img
              src={'/media/slider/' + SliderData[current]}
              alt="travel image"
              className="slide_image"
            />
          </div>
        )}
      </div>
      <div className="pagination">
        {current !== 0 ? (
          <Pagination
            img={'/media/slider/' + SliderData[current - 1]}
            onClick={prevSlide}
          />
        ) : null}
        <Pagination img={'/media/slider/' + SliderData[current]} />
        {current !== length - 1 ? (
          <Pagination
            img={'/media/slider/' + SliderData[current + 1]}
            onClick={nextSlide}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Slider;
