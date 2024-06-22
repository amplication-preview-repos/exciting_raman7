import { CountryWhereUniqueInput } from "../country/CountryWhereUniqueInput";

export type DeparturePointCreateInput = {
  country?: CountryWhereUniqueInput | null;
  location?: string | null;
  name?: string | null;
};
