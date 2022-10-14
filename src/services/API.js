import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000",
});

export const fetchUsers = async () => await API.get("/pessoas");

export const addUser = async (payload) => await API.post("/pessoa", payload);

export default API;
