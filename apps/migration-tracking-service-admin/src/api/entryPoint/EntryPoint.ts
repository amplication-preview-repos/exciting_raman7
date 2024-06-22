import { Country } from "../country/Country";

export type EntryPoint = {
  country?: Country | null;
  createdAt: Date;
  id: string;
  location: string | null;
  name: string | null;
  updatedAt: Date;
};
