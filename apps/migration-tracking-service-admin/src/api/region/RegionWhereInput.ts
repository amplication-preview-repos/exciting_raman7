import { CityListRelationFilter } from "../city/CityListRelationFilter";
import { CountryWhereUniqueInput } from "../country/CountryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RegionWhereInput = {
  cities?: CityListRelationFilter;
  country?: CountryWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
};
