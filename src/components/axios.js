import axios from "axios";

const instance = axios.create({
  baseURL: " https://messaging-app-backend-maleo.herokuapp.com",
});

export default instance;
