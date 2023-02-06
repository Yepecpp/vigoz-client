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
            <img src="/media/default_user.png" alt="" />
          </div>
          <Button
            variant="contained"
            component="label"
            className="upload_photo"
          >
            Upload
            <input hidden accept="image/*" multiple type="file" />
          </Button>
        </div>
        <div className="user-info">
          <label htmlFor="" className="asd">
            Nombre completo
          </label>
          <div className="full-name">
            {`${auth.data.name} ${auth.data.last_name}`}
          </div>
           <label htmlFor="">Correo Electronico</label>
          <div className="ts">Programmer</div>
          <div className="email">{auth.data.login.email}</div>
          <label htmlFor="">Usuario</label>
          <div className="username">{auth.data.login.username}</div>
        </div>
        <div className="container_2">
          <div className="cont_box">
          <label htmlFor="">Computing</label>
          <div className="ts">809-201-5432</div>
          <div className="ts">Dominican Republic</div>
          </div>
          
          <div className="cont_two">
           <label htmlFor="">Correo Electronico</label>
          <div className="ts">Programmer</div>
          <div className="email">{auth.data.login.email}</div>
          <label htmlFor="">Usuario</label>
          <div className="username">{auth.data.login.username}</div>

        </div>
        </div>
        {/*  </div>
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
        */}
      </div>
    </div> 
  );
};

export default Perfilc;
