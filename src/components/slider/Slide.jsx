const Slide = (imageUrl, active) => {
  return (
    <>
      {console.log('valor de active: ' + active.active)}
      {imageUrl.imageUrl.map((slide, index) => {
        return (
          <div id="slaid" className="item-slide" key={index}>
            <img src={slide} />
          </div>
        );
      })}
    </>
  );
};

export default Slide;
