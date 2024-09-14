import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

const register = (person_name, company_name, email, password) => {
  return axios.post(`${API_URL}/register`, {
    person_name,
    company_name,
    email,
    password,
  });
};

const login = (email, password) => {
  return axios.post(`${API_URL}/login`, { email, password });
};

const getCurrentUser = () => {
  return axios.get(`${API_URL}/profile`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

export default {
  register,
  login,
  getCurrentUser,
};
