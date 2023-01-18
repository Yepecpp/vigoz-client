const Squares = ({ imageUrl, name }) => {
  return (
    <div className="squares" style={{ backgroundImage: `url(${imageUrl})` }}>
      <p>{name}</p>
    </div>
  );
};

export default Squares;
