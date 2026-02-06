import axios from "axios";

const API_URL = "http://localhost:8082/api/users";

export const registerUser = (user) =>
  axios.post(`${API_URL}/register`, user);

export const loginUser = (user) =>
  axios.post(`${API_URL}/login`, user);
