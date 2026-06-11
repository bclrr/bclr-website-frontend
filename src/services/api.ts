import axios from "axios";
import type { WikiPagesPaginatedModel, WikiPageModel, UserModel } from "../types";
import type { SignInDto } from "../dto";

const BASE_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export async function getPages() {
  const response = await api.get<WikiPagesPaginatedModel>("wiki/page");
  return response.data;
}

export async function getOnePage(slug: string) {
  const response = await api.get<WikiPageModel>("wiki/page/" + slug);
  return response.data;
}

export async function signIn(data: SignInDto) {
  const response = await api.post<UserModel>("auth/signin", data);
  return response.data;
}