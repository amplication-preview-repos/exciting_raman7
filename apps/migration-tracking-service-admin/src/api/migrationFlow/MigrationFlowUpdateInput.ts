import { MigrantsUpdateManyWithoutMigrationFlowsInput } from "./MigrantsUpdateManyWithoutMigrationFlowsInput";

export type MigrationFlowUpdateInput = {
  date?: Date | null;
  destinationCountry?: string | null;
  migrantsItems?: MigrantsUpdateManyWithoutMigrationFlowsInput;
  numberOfMigrants?: number | null;
  originCountry?: string | null;
};
