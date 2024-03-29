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
          Me
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

{
  /*  </div>
       <div className="form-container">
        <form>
          <div className="personal-data">
            <h3>Personal Data</h3>
            <div className="form-row">
              <label htmlFor="full-name">Full Name</label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                value={auth.data.name}
              />
            </div>
            <div className="form-row">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={auth.data.login.email}
              />
            </div>
            <div className="form-row">
              <label htmlFor="phone-number">Phone Number</label>
              <input
                type="number"
                id="phone-number"
                name="phone-number"
                value={auth.data.phone}
              />
            </div>
            <Button variant="outlined">Save Changes</Button>
          </div>
          <div className="account-data">
            <h3>Account Data</h3>
            <div className="form-row">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={auth.data.login.username}
              />
            </div>
            <div className="form-row">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={auth.data.login?.password}
              />
            </div>
            <Button variant="outlined">Save Changes</Button>
          </div>
        </form>
        */
}
