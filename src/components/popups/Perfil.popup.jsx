import { useState } from 'react';
import { Button, Box } from '@mui/material';
import { useAuthContext } from '../../contexts/Auth';
import { AxiosClient } from '../../libs/axios';
const PerfilPopup = ({ isOpened, setIsOpened }) => {
  const [auth] = useAuthContext();
  const [passw, Setpassw] = useState({
    old: '',
    new: '',
    confirm: '',
  });
  const sendData = async () => {
    if (passw.old === '' || passw.new === '' || passw.confirm === '') {
      alert('Todos los campos son obligatorios');
      return;
    }
    if (passw.new !== passw.confirm) {
      alert('Las contraseñas no coinciden');
      return;
    }
    const response = await AxiosClient().put('/auth/password', {
      password: passw,
    });
    if (response.status === 200) {
      alert('Contraseña cambiada con exito');
      setIsOpened(false);
      return;
    }
    alert('Error al cambiar la contraseña');
  };
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
          <input
            type="text"
            value={passw.old}
            onChange={(e) => Setpassw({ ...passw, old: e.target.value })}
          />
          <label htmlFor="" className="info_popup">
            Contraseña nueva
          </label>
          <input
            type="text"
            value={passw.new}
            onChange={(e) => Setpassw({ ...passw, new: e.target.value })}
          />
          <label htmlFor="" className="info_popup">
            Confirmar contraseña
          </label>
          <input
            type="text"
            value={passw.confirm}
            onChange={(e) => Setpassw({ ...passw, confirm: e.target.value })}
          />
          <Box mt={3}>
            <Button
              variant="outlined"
              type="submit"
              className="btn_contra"
              onClick={sendData}
            >
              Guardar
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default PerfilPopup;
