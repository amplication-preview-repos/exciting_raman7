import { SortOrder } from "../../util/SortOrder";

export type CountryOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  population?: SortOrder;
  updatedAt?: SortOrder;
};
