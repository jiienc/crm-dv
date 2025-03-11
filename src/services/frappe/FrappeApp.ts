import axios from "axios";
// import dotenv from 'dotenv';

// dotenv.config();

// const FRAPPE_URL = "https://exmanage-internal.connectowl.io/";

const apiKey = import.meta.env.VITE_API_KEY;
const apiSecret = import.meta.env.VITE_API_SECRET;

const authHeader = `token ${apiKey}:${apiSecret}`;

export const frappeAPI = axios.create({
  baseURL: "/api",
  headers: {
    "Authorization": authHeader,
    "Content-Type": "application/json",
  },
});
