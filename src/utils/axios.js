import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
instance.defaults.headers["Authorization"] = "instance token";
export default instance;
