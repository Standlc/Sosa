import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
// const TOKEN =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNmM0NDRlYmE0ZmQ3MjgwNmRjMjNkNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTQ5NzY4OCwiZXhwIjoxNjM1NzU2ODg4fQ.IAGqyh_rRw8zxhmmbdGAe2gRGNWyKN5W0ztDu5EsKAQ";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  // headers: { token: `Bearer ${TOKEN}` },
});
