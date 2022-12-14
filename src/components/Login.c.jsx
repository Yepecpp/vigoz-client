import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuthContext } from '../contexts/Auth';
import Axios from '../libs/axios';
import axios from '../libs/axios';
const Clogin = () => {
  const [User, SetUser] = useAuthContext();
  const navigate = useNavigate();
  useEffect(() => {
    const AbortSignal = new AbortController();
    const doCheck = async () => {
      if (!localStorage.getItem('auth-token')) return;
      try {
        const response = await axios.get('/auth', {
          signal: AbortSignal.signal,
        });
        if (response.status !== 200 || response.status >= 500) {
          SetUser({ auth: false, token: null, User: {} });
          localStorage.removeItem('auth-token');
          return;
        }
        localStorage.setItem('auth-token', response.data.token);
        SetUser({
          auth: true,
          token: response.data.token,
          UserData: response.data.user,
        });
        navigate('/Dashboard');
      } catch (error) {
        if (error.name === 'AbortError') return;
        if (error.response.status === 401) {
          SetUser({ auth: false, token: null, User: {} });
          localStorage.removeItem('auth-token');
          return;
        }
      }
    };
    doCheck();
    return () => {
      AbortSignal.abort();
    };
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
    localStorage.setItem('auth-token', response.data.token);
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
