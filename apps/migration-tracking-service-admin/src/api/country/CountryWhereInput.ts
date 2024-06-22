import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DeparturePointListRelationFilter } from "../departurePoint/DeparturePointListRelationFilter";
import { EntryPointListRelationFilter } from "../entryPoint/EntryPointListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { RegionListRelationFilter } from "../region/RegionListRelationFilter";

export type CountryWhereInput = {
  code?: StringNullableFilter;
  departurePoints?: DeparturePointListRelationFilter;
  entryPoints?: EntryPointListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  population?: IntNullableFilter;
  regions?: RegionListRelationFilter;
};
