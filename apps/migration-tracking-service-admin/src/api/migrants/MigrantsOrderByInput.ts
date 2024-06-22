import { SortOrder } from "../../util/SortOrder";

export type MigrantsOrderByInput = {
  age?: SortOrder;
  createdAt?: SortOrder;
  firstName?: SortOrder;
  gender?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  migrationFlowId?: SortOrder;
  updatedAt?: SortOrder;
};
