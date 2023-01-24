import { useAuthContext } from '../contexts/Auth';
import { AxiosClient } from '../libs/axios';
/*const doCheck = async () => {
  if (!localStorage.getItem('auth-token')) return;
  try {
    const response = await axios.get('/auth', {
      signal: AbortSignal.signal,
    });
    if (response.status !== 200 || response.status >= 500) {
      SetUser({ auth: false, token: null, data: {} });
      localStorage.removeItem('auth-token');
      return;
    }
    localStorage.setItem('auth-token', response.data.token);
    SetUser({
      isAuth: true,
      token: response.data.token,
      data: response.data.user,
    });
    navigate('/Dashboard');
  } catch (error) {
    if (error.name === 'AbortError') return;
    if (error.response.status === 401) {
      SetUser({ isAuth: false, token: null, data: null });
      localStorage.removeItem('auth-token');
      return;
    }
  }
};*/
export const LogOut = (Setauth) => {
  Setauth({ isAuth: false, token: null, data: null });
  localStorage.removeItem('auth-token');
};
