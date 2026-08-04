import axios from "axios";

const API_URL = "http://localhost:8083/api/users";

export const registerUser = (user) =>
  axios.post(`${API_URL}/register`, user);

export const loginUser = (user) =>
  axios.post(`${API_URL}/login`, user);


const API_BASE = "http://localhost:8083/api";

export const getBrands = () =>
  axios.get(`${API_BASE}/brands`);


