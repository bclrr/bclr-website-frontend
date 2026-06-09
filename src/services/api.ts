import axios from "axios";
import type { WikiPagesResponse } from "../types";

const BASE_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export async function getPages() {
  const response = await api.get<WikiPagesResponse>("wiki/page");
  return response.data;
}