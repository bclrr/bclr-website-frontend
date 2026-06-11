import axios from "axios";
import type { WikiPagesPaginatedType, WikiPageType } from "../types";

const BASE_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export async function getPages() {
  const response = await api.get<WikiPagesPaginatedType>("wiki/page");
  return response.data;
}

export async function getOnePage(slug: string) {
  const response = await api.get<WikiPageType>("wiki/page/" + slug);
  return response.data;
}