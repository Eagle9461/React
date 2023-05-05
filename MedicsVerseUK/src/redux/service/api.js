import axios from 'axios';

export default axios.create({
  baseURL: 'https://focuseuk.com/api.php',
  withCredentials: false,
  crossDomain: true,
  headers: {
    'Content-Type': 'application/json',
  },
});
