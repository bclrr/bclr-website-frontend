import type { PaginatedModel } from "./common";
import type { UserRefModel } from "./user";

export type CategorieModel = {
  id: number;
  label: string;
  slug: string;
  isActive?: boolean;
}

export interface PageSummaryModel {
  id: number;
  title: string;
  slug: string;
}

export interface CategorieWithPagesModel extends CategorieModel {
  pages: PageSummaryModel[];
}

export type PageModel = {
  slug: string;
  title: string;
  content: string | undefined;
  createdAt: string;
  updatedAt: string;
  categorie: CategorieModel;
  createdBy: UserRefModel;
  updatedBy: UserRefModel | null;
}

export type PagesPaginatedModel = PaginatedModel<PageModel>;