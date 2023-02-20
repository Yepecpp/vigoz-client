import React from 'react';
import { Button, Box } from '@mui/material';
import { useAuthContext } from '../../contexts/Auth';
const PerfilPopup = ({ isOpened, setIsOpened }) => {
  const [auth] = useAuthContext();
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="closeperfil" onClick={() => setIsOpened(!isOpened)}>
          &times;
        </span>
        <p>Cambiar Contraseña</p>
        <div className="content-contra">
          <label htmlFor="" className="info_popup">
            Contraseña actual
          </label>
          <input type="text" />
          <label htmlFor="" className="info_popup">
            Contraseña nueva
          </label>
          <input type="text" />
          <label htmlFor="" className="info_popup">
            Confirmar contraseña
          </label>
          <input type="text" />
          <Box mt={3}>
            <Button variant="outlined" type="submit" className="btn_contra">
              Guardar
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default PerfilPopup;
