import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000', // Replace with your backend URL
  timeout: 5000, // Timeout set to 5 seconds
});

export default instance;
