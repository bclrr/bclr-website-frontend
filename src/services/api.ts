import axios from "axios";
import type { PageModel, UserModel, CategorieWithPagesModel } from "../types";
import type { SignInDto, SignUpDto } from "../dto";

const BASE_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export async function getPagesByCategories() {
  const response = await api.get<CategorieWithPagesModel[]>("wiki/categorie", {params: {"include" : "pages" } });
  return response.data;
}

export async function getOnePage(slug: string) {
  const response = await api.get<PageModel>("wiki/page/" + slug);
  return response.data;
}

export async function signIn(data: SignInDto) {
  const response = await api.post<UserModel>("auth/signin", data);
  return response.data;
}

export async function signUp(data: SignUpDto) {
  const response = await api.post<UserModel>("auth/signup", data);
  return response.data;
}
