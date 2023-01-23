const Pagination = (imageUrl, setActive) => {
  return (
    <>
      {imageUrl.imageUrl.map((slide, index) => {
        return (
          <div
            className="item-pagination"
            onClick={() => setActive.setActive(index)}
            key={index}
          >
            <img src={slide} />
          </div>
        );
      })}
    </>
  );
};

export default Pagination;
