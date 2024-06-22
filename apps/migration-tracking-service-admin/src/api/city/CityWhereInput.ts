import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { RegionWhereUniqueInput } from "../region/RegionWhereUniqueInput";

export type CityWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  population?: IntNullableFilter;
  region?: RegionWhereUniqueInput;
};
