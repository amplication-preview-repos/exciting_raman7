import { SortOrder } from "../../util/SortOrder";

export type RegionOrderByInput = {
  countryId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
