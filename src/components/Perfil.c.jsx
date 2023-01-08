import React from 'react'


const Perfilc = () => {
  return (
    <div className="user-profile">
      <div className="user-photo">
        <img src="/public/media/fotousuario.png" alt="" />
      </div>
      <div className="user-info">
        <div className="full-name"></div>
        <div className="email"></div>
        <div className="username"></div>
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
              <input type="tel" id="phone-number" name="phone-number" />
            </div>
            <button type="submit">Save Changes</button>
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
            <button type="submit">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
    
  );
}

export default Perfilc;
