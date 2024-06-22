import { EntryPointWhereInput } from "./EntryPointWhereInput";
import { EntryPointOrderByInput } from "./EntryPointOrderByInput";

export type EntryPointFindManyArgs = {
  where?: EntryPointWhereInput;
  orderBy?: Array<EntryPointOrderByInput>;
  skip?: number;
  take?: number;
};
