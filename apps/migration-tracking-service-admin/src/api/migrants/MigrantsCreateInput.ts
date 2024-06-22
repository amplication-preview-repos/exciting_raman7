import { DocumentsCreateNestedManyWithoutMigrantsItemsInput } from "./DocumentsCreateNestedManyWithoutMigrantsItemsInput";
import { MigrationFlowWhereUniqueInput } from "../migrationFlow/MigrationFlowWhereUniqueInput";

export type MigrantsCreateInput = {
  age?: number | null;
  documentsItems?: DocumentsCreateNestedManyWithoutMigrantsItemsInput;
  firstName?: string | null;
  gender?: string | null;
  lastName?: string | null;
  migrationFlow?: MigrationFlowWhereUniqueInput | null;
};
