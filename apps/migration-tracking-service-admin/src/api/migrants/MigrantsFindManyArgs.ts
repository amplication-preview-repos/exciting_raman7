import { MigrantsWhereInput } from "./MigrantsWhereInput";
import { MigrantsOrderByInput } from "./MigrantsOrderByInput";

export type MigrantsFindManyArgs = {
  where?: MigrantsWhereInput;
  orderBy?: Array<MigrantsOrderByInput>;
  skip?: number;
  take?: number;
};
