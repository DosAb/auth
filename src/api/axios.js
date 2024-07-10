import axios from "axios";

const instance = axios.create({
  baseURL: "https://pudge-backender.org.kg/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const postRegister = (data) => instance.post(`register/`, data);
export const postLogin = (data) => instance.post(`login/`, data);
