import { DocumentsUpdateManyWithoutMigrantsItemsInput } from "./DocumentsUpdateManyWithoutMigrantsItemsInput";
import { MigrationFlowWhereUniqueInput } from "../migrationFlow/MigrationFlowWhereUniqueInput";

export type MigrantsUpdateInput = {
  age?: number | null;
  documentsItems?: DocumentsUpdateManyWithoutMigrantsItemsInput;
  firstName?: string | null;
  gender?: string | null;
  lastName?: string | null;
  migrationFlow?: MigrationFlowWhereUniqueInput | null;
};
