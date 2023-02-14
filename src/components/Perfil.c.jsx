import React from 'react';
import { Button } from '@mui/material';
import { useAuthContext } from '../contexts/Auth';
const Perfilc = () => {
  const [auth] = useAuthContext();
  return (
    <div className="user-profile">
      <div className="contenedor_user_info">
        <div className="photobutton">
          <div className="user-photo">
            <img src="/media/user.png" />
          </div>
          <Button
            variant="contained"
            component="label"
            className="upload_photo"
          >
            Upload
            <input hidden accept="image/*" type="file" />
          </Button>
        </div>
        <label htmlFor="" className="user_nameProfile">
          Me alex hiciste un lio con el sidernav con la clase e por eso que esto esta asi lo intente a las 20:56 del 13-02-2023
        </label>
        <div className="user-info">
          <p className="full-name">
            {`${auth.data.name} ${auth.data.last_name}`}
          </p>
          <p htmlFor="tr">Correo Electronico</p>
          <p className="ts">Programmer</p>
          <p className="email">{auth.data.login.email}</p>
          <p htmlFor="ty">Usuario</p>
          <p className="username">{auth.data.login.username}</p>
        </div>
      </div>

      <div className="container_2">
        <div className="cont_box">
          <label className="bold">Department</label>
          <p htmlFor="">Computing</p>
          <p className="">809-201-5432</p>
          <p className="">Dominican Republic</p>
        </div>

        <div className="cont_two">
          <label className="bold">Company</label>
          <p htmlFor="">Correo Electronico</p>
          <p className="">Programmer</p>
          <p className="email">{auth.data.login.email}</p>
          <p htmlFor="">Usuario</p>
          <p className="username">{auth.data.login.username}</p>
        </div>
      </div>
    </div>
  );
};

export default Perfilc;
