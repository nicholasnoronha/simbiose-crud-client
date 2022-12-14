import axios from "axios";

const API = axios.create({
  baseURL: "https://simbiose-crud-server.herokuapp.com",
});

export const fetchUsers = async () => await API.get("/pessoas");

export const addUser = async (payload) => await API.post("/pessoa", payload);

export const updateUser = async (payload) =>
  await API.put(`/pessoa/${payload.id}`, payload);

export const deleteUser = async (id) => await API.delete(`/pessoa/${id}`);

export default API;
