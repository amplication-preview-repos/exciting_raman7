import { CountryWhereUniqueInput } from "../country/CountryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type EntryPointWhereInput = {
  country?: CountryWhereUniqueInput;
  id?: StringFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
};
