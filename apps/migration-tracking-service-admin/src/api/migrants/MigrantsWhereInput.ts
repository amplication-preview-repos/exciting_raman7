import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DocumentsListRelationFilter } from "../documents/DocumentsListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MigrationFlowWhereUniqueInput } from "../migrationFlow/MigrationFlowWhereUniqueInput";

export type MigrantsWhereInput = {
  age?: IntNullableFilter;
  documentsItems?: DocumentsListRelationFilter;
  firstName?: StringNullableFilter;
  gender?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  migrationFlow?: MigrationFlowWhereUniqueInput;
};
