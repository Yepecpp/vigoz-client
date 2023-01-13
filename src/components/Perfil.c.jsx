import React from 'react'
import { Button} from '@mui/material';



const Perfilc = () => {
  return (
    <div className="user-profile">
      <div className="contenedor_user_info">
        <div className="photobutton">
        <div className="user-photo">
          <img src="/media/fotousuario.png" alt="" />
        </div>
        <Button variant="contained" component="label" className="upload_photo">
            Upload
            <input hidden accept="image/*" multiple type="file" />
          </Button>
          </div>
        <div className="user-info">
          <label htmlFor="" className="asd">Nombre completo</label>
          <div className="full-name">Jonathan Valdez</div>
          <label htmlFor="">Correo Electronico</label>
          <div className="email">Jonathanvaldezmejia@gmail.com</div>
          <label htmlFor="">Usuario</label>
          <div className="username">Jona1912</div>
      </div>
      </div>
      <div className="form-container">
        <form>
          <div className="personal-data">
            <h3>Personal Data</h3>
            <div className="form-row">
              <label htmlFor="full-name">Full Name</label>
              <input type="text" id="full-name" name="full-name" />
            </div>
            <div className="form-row">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-row">
              <label htmlFor="phone-number">Phone Number</label>
              <input type="number" id="phone-number" name="phone-number" />
            </div>
            <Button variant="outlined">Save Changes</Button>
          </div>
          <div className="account-data">
            <h3>Account Data</h3>
            <div className="form-row">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" />
            </div>
            <div className="form-row">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" />
            </div>
            <Button variant="outlined">Save Changes</Button>
          </div>
        </form>
      </div>
    </div>
    
  );
}

export default Perfilc;
