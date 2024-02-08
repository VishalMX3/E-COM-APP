import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzA2YmVhZmI1MTQwMmJlYjlmMDRhMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNzM3ODI1MCwiZXhwIjoxNzA3NjM3NDUwfQ.l-DtBHW4GLz_Oxw4QdfglQjvlCbiRTrBlWTDwoKXJwY";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
