import { MigrantsCreateNestedManyWithoutMigrationFlowsInput } from "./MigrantsCreateNestedManyWithoutMigrationFlowsInput";

export type MigrationFlowCreateInput = {
  date?: Date | null;
  destinationCountry?: string | null;
  migrantsItems?: MigrantsCreateNestedManyWithoutMigrationFlowsInput;
  numberOfMigrants?: number | null;
  originCountry?: string | null;
};
