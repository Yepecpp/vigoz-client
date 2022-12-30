import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuthContext } from '../contexts/Auth';
import Axios from '../libs/axios';
import axios from '../libs/axios';
import Cookies from 'universal-cookie';
const Clogin = () => {
  const [User, SetUser] = useAuthContext();
  const navigate = useNavigate();
  const cookies = new Cookies();
  useEffect(() => {
    const doCheck = async () => {
      if (!cookies.get('auth')) return;
      console.log(cookies.get('auth'));
      const response = await axios.get('/auth');
      console.log(response);
      if (response.status !== 200 || response.status >= 500) {
        SetUser({ auth: false, token: null, User: {} });
        cookies.remove('auth');
        console.log('removed auth cookie');
        return;
      }
      cookies.set('auth', response.data.token, {
        maxAge: 1000 * 60 * 60,
        sameSite: true,
      });
      SetUser({
        auth: true,
        token: response.data.token,
        UserData: response.data.user,
      });
      navigate('/Dashboard');
    };
    doCheck();
  }, []);

  const [user, setUser] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('Enter Your Credeintials');
  const Login = async (e) => {
    e.preventDefault();
    const response = await Axios.post('/auth/login', { login: user });
    if (response.status !== 200) {
      setError(response.data.msg);
      return;
    }
    SetUser({
      auth: true,
      token: response.data.token,
      UserData: response.data.user,
    });
    cookies.set('auth', response.data.token, {
      maxAge: 1000 * 60 * 60,
    });
    navigate('/Dashboard');
  };
  return (
    <div className="wrapper">
      <div className="login">
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
          <button className="toogle" type="button"></button>
          <button className="controle">Login</button>
        </form>
      </div>
      <div className="img-container">
        <img src="media/IMG_removebg.jpg" />
      </div>
    </div>
  );
};

export default Clogin;
