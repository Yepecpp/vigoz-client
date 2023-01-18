/* Body Component */
const Slide = () => {
  return (
    <div className="contenedor_home">
      <div className="container_slide">
        <input type="radio" id="1" name="image-slide" hidden />
        <input type="radio" id="2" name="image-slide" hidden />
        <input type="radio" id="3" name="image-slide" hidden />

        <div className="slide">
          <div className="item-slide">
            <img src="/media/Slider/hieloSlide.jpg" />
          </div>
          <div className="item-slide">
            <img src="/media/Slider/Hielo-marino.jpg" />
          </div>
          <div className="item-slide">
            <img src="/media/Slider/poloSlide.jpg" />
          </div>
        </div>
        <div className="pagination">
          <div className="pagination-item">
            <img src="/media/Slider/hieloSlide.jpg" />
          </div>
          <div className="pagination-item">
            <img src="/media/Slider/Hielo-marino.jpg" />
          </div>
          <div className="pagination-item">
            <img src="/media/Slider/poloSlide.jpg" />
          </div>
        </div>
      </div>
      <div className="container_TwoSquares">
        <div
          className="squares sq1"
          style={{ backgroundImage: '/media/logo.png' }}
        >
          <p>Shop</p>
        </div>
        <div className="squares sq2">
          <p>Repairs</p>
        </div>
      </div>
    </div>
  );
};

export default Slide;
