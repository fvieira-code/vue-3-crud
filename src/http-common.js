import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/project-supplier-portal/api/v1",
  headers: {
    "Content-type": "application/json",
  },
});
