import type { PaginatedModel } from "./common";
import type { UserRefModel } from "./user";

export type CategorieModel = {
  id: number;
  label: string;
  slug: string;
}

export type WikiPageModel = {
  slug: string;
  title: string;
  content: string | undefined;
  createdAt: string;
  updatedAt: string;
  categorie: CategorieModel;
  createdBy: UserRefModel;
  updatedBy: UserRefModel | null;
}

export type WikiPagesPaginatedModel = PaginatedModel<WikiPageModel>;