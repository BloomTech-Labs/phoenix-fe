import axios from 'axios';

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: 'https://phoenix-be-production.herokuapp.com',
    headers: {
      authorization: localStorage.getItem('token'),
    },
  });
};
