import { SortOrder } from "../../util/SortOrder";

export type DocumentsOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  migrantId?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
