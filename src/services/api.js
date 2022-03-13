import axios from "axios";
import { parseCookies } from "nookies";

const { "nextauth.token": token } = parseCookies();

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

if (token) {
  api.headers["Authorization"] = `Bearer ${token}`;
  // api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export { api }
// api.interceptors.request.use((config) => {
//   console.log(config);

//   return config;
// });
