import React from "react";
const Clogin = () => {
  return (
    <div className="wrapper">
      <div className="login">
        <h2>Login</h2>
        <h3>Enter your credentials</h3>
        <form action="form" className="form-container">
          <input className="control" type="text" placeholder="Username" />
          <input className="control" id="password" type="password" placeholder="Password" />
          <button className="toogle" type="button"></button>
          <button className="controle">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Clogin;
