import { SortOrder } from "../../util/SortOrder";

export type CityOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  population?: SortOrder;
  regionId?: SortOrder;
  updatedAt?: SortOrder;
};
