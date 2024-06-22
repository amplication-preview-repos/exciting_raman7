import { CountryWhereUniqueInput } from "../country/CountryWhereUniqueInput";

export type DeparturePointUpdateInput = {
  country?: CountryWhereUniqueInput | null;
  location?: string | null;
  name?: string | null;
};
