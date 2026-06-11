import type { PaginatedData } from "./common";
import type { UserRef } from "./user";

export type CategorieType = {
  id: number;
  label: string;
  slug: string;
}

export type WikiPageType = {
  slug: string;
  title: string;
  content: string | undefined;
  createdAt: string;
  updatedAt: string;
  categorie: CategorieType;
  createdBy: UserRef;
  updatedBy: UserRef | null;
}

export type WikiPagesPaginatedType = PaginatedData<WikiPageType>;