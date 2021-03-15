import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://hugh-react-burger-default-rtdb.firebaseio.com',
});

export default instance;
