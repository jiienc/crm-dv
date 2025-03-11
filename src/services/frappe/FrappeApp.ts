import axios from "axios";

// const FRAPPE_URL = "https://exmanage-internal.connectowl.io/";

const API_KEY = "900f012069cb487";
const API_SECRET = "411e0045bd2b1e9";

const authHeader = `token ${API_KEY}:${API_SECRET}`;

export const frappeAPI = axios.create({
  baseURL: "/api",
  headers: {
    "Authorization": authHeader,
    "Content-Type": "application/json",
  },
});
