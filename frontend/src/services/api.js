import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getUsers = () => axios.get(`${API_URL}/users`);
export const createUser = (data) => axios.post(`${API_URL}/users`, data);