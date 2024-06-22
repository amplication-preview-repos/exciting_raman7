import { CountryWhereUniqueInput } from "../country/CountryWhereUniqueInput";

export type EntryPointCreateInput = {
  country?: CountryWhereUniqueInput | null;
  location?: string | null;
  name?: string | null;
};
