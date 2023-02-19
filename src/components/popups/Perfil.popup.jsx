import React from 'react';
import { Button, Box } from '@mui/material';

const PerfilPopup = () => {
  return (
    <>
        <Button id="myBtn" variant="outlined" type="submit">Cambiar contraseña</Button>
        <div id="myModal" className="modal">
            <div className="modal-content">
                <span className="closeperfil">&times;</span>
                <p>Cambiar Contraseña</p>
                <div className="content-contra">
                <label htmlFor="" className="info_popup">Contraseña actual</label>
                <input type="text" />
                <label htmlFor="" className="info_popup">Contraseña nueva</label>
                <input type="text" />
                <label htmlFor="" className="info_popup">Confirmar contraseña</label>
                <input type="text"/>
                <Box mt={3}>
                <Button variant="outlined" type="submit" className="btn_contra">Guardar</Button>
                </Box>
                </div>
            </div>
        </div>
</>
  );
};

export default PerfilPopup;