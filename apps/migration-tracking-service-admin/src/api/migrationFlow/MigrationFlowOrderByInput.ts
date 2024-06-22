import { SortOrder } from "../../util/SortOrder";

export type MigrationFlowOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  destinationCountry?: SortOrder;
  id?: SortOrder;
  numberOfMigrants?: SortOrder;
  originCountry?: SortOrder;
  updatedAt?: SortOrder;
};
