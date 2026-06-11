export type UserRefModel = {
  pseudonyme: string;
  slug: string;
}

export type UserModel = {
  id: string;
  role: string;
  pseudonyme: string;
  username: string;
  slug: string;
  email: string;
  description: string | null;
  createdAt: string;
  updatedAt: string;
}