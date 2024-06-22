import { SortOrder } from "../../util/SortOrder";

export type DeparturePointOrderByInput = {
  countryId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
