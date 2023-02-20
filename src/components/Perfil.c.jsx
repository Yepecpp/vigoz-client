import { useState } from 'react';
import { Button } from '@mui/material';
import PerfilPopup from './popups/Perfil.popup';
import { useAuthContext } from '../contexts/Auth';
import Axios from 'axios';
const Perfilc = () => {
  const [auth] = useAuthContext();
  const [files, setFiles] = useState();
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="user-profile">
      <div className="contenedor_user_info">
        <div className="photobutton">
          <div className="user-photo">
            <img
              src={`${import.meta.env.VITE_HOSTAPI}/${
                auth.data.images?.avatar
              }`}
            />
          </div>
          <form className='btn_t'
            encType="multipart/form-data"
            onSubmit={(e) => {
              e.preventDefault();
              Axios.put(
                `${import.meta.env.VITE_HOSTAPI}/api/v1/users`,
                {
                  avatar: files,
                  user: {
                    ...auth.data,
                    login: { ...auth.data.login, passw: '123beibigirl' },
                  },
                },
                {
                  headers: {
                    'Content-Type': 'multipart/form-data',
                    authorization: 'Bearer ' + auth.token,
                  },
                }
              );
            }}
          >
            <input
              accept="image/*"
              type="file"
              name="file"
              onChange={(e) => {
                if (e.target.files) {
                  setFiles(e.target.files[0]);
                }
              }}
            />
            <Button variant="outlined" className="upload_photo" type="submit">
              Cambiar imagen
            </Button>
          </form>
        </div>

        <div className="user-info">
          <p className="full-name">
            {`${auth.data.name} ${auth.data.last_name}`}
          </p>
          <p htmlFor="tr">Correo Electronico</p>
          <p className="email">{auth.data.login.email}</p>
          <p htmlFor="ty">Usuario</p>
          <p className="username">{auth.data.login.username}</p>
        </div>
        <Button 
        variant="outlined"
        className="edit_profile"
        onClick={() => setIsOpened(!isOpened)}
      >
        Cambiar contraseña
      </Button>
      </div>

      <div className="container_2">
        <div className="cont_box">
          <label className="bold">Department</label>
          <p>Computing</p>
          <p className="">809-201-5432</p>
          <p className="">Dominican Republic</p>
        </div>

        <div className="cont_two">
          <label className="bold">Company</label>
          <p>Correo Electronico</p>
          <p className="email">{auth.data.login.email}</p>
          <p>Usuario</p>
          <p className="username">{auth.data.login.username}</p>
        </div>
        
      </div>
    
      {isOpened ? (
        <PerfilPopup setIsOpened={setIsOpened} isOpened={isOpened} />
      ) : null}
    </div>
  );
};

export default Perfilc;
