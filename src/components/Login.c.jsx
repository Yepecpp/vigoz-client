import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useAuthContext } from '../contexts/Auth';
import { AxiosClient } from '../libs/axios';
const Clogin = () => {
  const axios = AxiosClient();
  //eslint-disable-next-line
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const [auth, Setauth] = useAuthContext();
  const [user, setUser] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('Enter Your Credeintials');
  const Login = async (e) => {
    e.preventDefault();
    const response = await axios.post('/auth/login', { login: user });
    if (response.status !== 200) {
      setError(response.data.msg);
      Setauth({
        isAuth: false,
        token: null,
        data: null,
        isEmp: false,
        employee: null,
      });
      localStorage.removeItem('auth-token');
      return;
    }
    Setauth({
      isAuth: true,
      token: response.data.token,
      data: response.data.user,
      isEmp: response.data.is_employee,
      employee: response.data?.employee,
    });
    localStorage.setItem('auth-token', response.data.token);
    navigate(from, { replace: true });
  };
  return (
    <div
      className="wrapper"
      style={{ backgroundImage: 'url(media/svg/shiny.svg)' }}
    >
      <div className="container_login">
        <img src="/media/vigoz.png" />
        <div className="container_info_login">
          <h2>Login</h2>
          <h3>Enter your credentials</h3>
          <form onSubmit={Login} className="form-container">
            <input
              className="control"
              type="text"
              placeholder="Username"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
            <input
              className="control"
              id="password"
              type="password"
              placeholder="Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <p className="error">{error}</p>
            <button className="controle">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Clogin;
