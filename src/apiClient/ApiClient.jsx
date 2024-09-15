import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:8080/Patranee/api/v1",
  // baseURL: "https://server.planterboxbd.com/planterbox/api/v1",
});

export default Api;
