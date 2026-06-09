import type { PaginatedResponse } from "./common";
import type { UserRef } from "./user";

export interface Categorie {
  id: number;
  label: string;
  slug: string;
}

export interface WikiPage {
  slug: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  categorie: Categorie;
  createdBy: UserRef;
  updatedBy: UserRef | null;
}

export type WikiPagesResponse = PaginatedResponse<WikiPage>;