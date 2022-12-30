import Axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const axios = Axios.create({
  baseURL: `http://${import.meta.env.VITE_HOSTAPI}`,
  timeout: 1000,
  headers: { authorization: 'Bearer ' + cookies.get('auth') || null },
  validateStatus: function (status) {
    return status >= 200 && status < 500; // default
  },
});
export default axios;
