import { CountryWhereUniqueInput } from "../country/CountryWhereUniqueInput";

export type EntryPointUpdateInput = {
  country?: CountryWhereUniqueInput | null;
  location?: string | null;
  name?: string | null;
};
