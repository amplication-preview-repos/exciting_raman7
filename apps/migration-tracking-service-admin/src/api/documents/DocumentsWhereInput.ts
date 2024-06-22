import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MigrantsWhereUniqueInput } from "../migrants/MigrantsWhereUniqueInput";

export type DocumentsWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  migrant?: MigrantsWhereUniqueInput;
  typeField?: StringNullableFilter;
};
