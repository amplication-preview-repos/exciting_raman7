import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MigrantsListRelationFilter } from "../migrants/MigrantsListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type MigrationFlowWhereInput = {
  date?: DateTimeNullableFilter;
  destinationCountry?: StringNullableFilter;
  id?: StringFilter;
  migrantsItems?: MigrantsListRelationFilter;
  numberOfMigrants?: IntNullableFilter;
  originCountry?: StringNullableFilter;
};
