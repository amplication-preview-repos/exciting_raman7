import { City } from "../city/City";
import { Country } from "../country/Country";

export type Region = {
  cities?: Array<City>;
  country?: Country | null;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
};
