import { DeparturePointWhereInput } from "./DeparturePointWhereInput";
import { DeparturePointOrderByInput } from "./DeparturePointOrderByInput";

export type DeparturePointFindManyArgs = {
  where?: DeparturePointWhereInput;
  orderBy?: Array<DeparturePointOrderByInput>;
  skip?: number;
  take?: number;
};
