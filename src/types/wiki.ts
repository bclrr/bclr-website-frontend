import type { PaginatedResponse } from "./common";
import type { UserRef } from "./user";

export interface CategorieType {
  id: number;
  label: string;
  slug: string;
}

export interface WikiPageType {
  slug: string;
  title: string;
  content: string | undefined;
  createdAt: string;
  updatedAt: string;
  categorie: CategorieType;
  createdBy: UserRef;
  updatedBy: UserRef | null;
}

export type WikiPagesPaginated = PaginatedResponse<WikiPageType>;