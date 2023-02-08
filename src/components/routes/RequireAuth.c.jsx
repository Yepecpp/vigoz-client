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
        Setauth(
          res.status === 200
            ? {
                isAuth: true,
                token: res.data.token,
                data: res.data.user,
                isEmp: res.data.is_employee,
                employee: res.data?.employee,
              }
            : () => {
                localStorage.removeItem('auth-token');
                return { isAuth: false, token: null, data: null };
              }
        );
        isLoading = false;
      })
      .catch((err) => {
        localStorage.removeItem('auth-token');
        Setauth({ isAuth: false, token: null, data: null });
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
