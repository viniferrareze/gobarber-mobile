import axios from 'axios';

const api = axios.create({
   BaseURL: 'http://192.168.2.104:3333',
});

export default api;
