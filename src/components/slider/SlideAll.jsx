import { useState } from 'react';

const SlideAll = (imageUrl) => {
  setInterval(() => {
    if (active !== null) {
      () => setActive(null);
      document.getElementById('slaid').classList.add('slide'),
        document.getElementById('slaid').classList.remove('slideAofD');
    }
  }, 10000);

  const [active, setActive] = useState(null);

  const SlideAllImage = (imageUrl) => {
    return imageUrl.imageUrl.imageUrl.map((slide, index) => {
      return (
        <div className="item-slide" key={index}>
          <img src={slide} />
        </div>
      );
    });
  };

  const SlideOneImage = (imageUrl) => {
    return (
      <div className="item-slide" key={0}>
        <img src={imageUrl.imageUrl.imageUrl[0]} />
        {
          (document.getElementById('slaid').classList.add('slideAofD'),
          document.getElementById('slaid').classList.remove('slide'))
        }
      </div>
    );
  };

  return (
    <>
      <div id="slaid" className="slide">
        {active === null ? (
          <SlideAllImage imageUrl={imageUrl} />
        ) : (
          <SlideOneImage imageUrl={imageUrl} />
        )}
      </div>
      <div className="pagination">
        {imageUrl.imageUrl.map((slide, index) => {
          return (
            <div
              className="item-pagination"
              key={index}
              onClick={() => setActive(index)}
            >
              <img src={slide} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SlideAll;
