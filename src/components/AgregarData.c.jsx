import { Button } from '@mui/material';

const AgregarData = ({ isOpened, SetisOpened, handleChange, search }) => {
  return (
    <div className="container_agregar">
      <div className="controls_agregar">
        <div className="container_agregar">
          <label className="text_agregar">Search:</label>
          <input
            type="text"
            name="buscar"
            className="search_agregar"
            onChange={handleChange}
            value={search}
          />
        </div>

        <Button
          variant="contained"
          size="medium"
          className="open_agregar"
          onClick={() => {
            SetisOpened(true);
          }}
          visibility={`${!isOpened}`}
        >
          Agregar
        </Button>
      </div>
    </div>
  );
};

export default AgregarData;
