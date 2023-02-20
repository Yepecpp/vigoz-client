import Axios from 'axios';
export const AxiosClient = () =>
  Axios.create({
    baseURL: `${import.meta.env.VITE_HOSTAPI}/api/v1`,
    timeout: 30000,
    headers: {
      authorization: 'Bearer ' + localStorage.getItem('auth-token') || null,
    },
    validateStatus: function (status) {
      return status >= 200 && status < 500; // default
    },
  });
