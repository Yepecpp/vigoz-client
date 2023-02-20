import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../contexts/Auth';
import Restricted from './Restricted.c';
import Loading from '../Loading.c';
import { AxiosClient } from '../../libs/axios';
function RequireAuth({ allowRoles = [], allowDep = [] }) {
  const [auth, Setauth] = useAuthContext();
  const location = useLocation();
  let isLoading = false;
  if (!auth.isAuth && localStorage.getItem('auth-token') !== null) {
    const axios = AxiosClient();
    isLoading = true;
    axios
      .get('/auth')
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem('auth-token', res.data.token);
          Setauth({
            isAuth: true,
            token: res.data.token,
            data: res.data.user,
            isEmp: res.data.is_employee,
            employee: res.data?.employee,
          });
        } else {
          localStorage.removeItem('auth-token');
          Setauth({
            isAuth: false,
            token: null,
            data: null,
            isEmp: false,
            employee: null,
          });
        }
        isLoading = false;
      })
      .catch(() => {
        localStorage.removeItem('auth-token');
        Setauth({
          isAuth: false,
          token: null,
          data: null,
          isEmp: false,
          employee: null,
        });
        isLoading = false;
      });
  }
  if (isLoading) {
    return <Loading />;
  }
  return auth?.isEmp ? (
    <Outlet />
  ) : auth?.isAuth ? (
    <Restricted />
  ) : (
    <Navigate to="/Login" state={{ from: location }} replace />
  );
}
/*return true? (
    <Outlet />
  ) auth?.isAuth ? <Restricted/> : (
    <Navigate to="/Login" state={{ from: location }} replace />
  ) */
export default RequireAuth;
