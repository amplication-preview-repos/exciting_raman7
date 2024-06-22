import { MigrationFlowWhereInput } from "./MigrationFlowWhereInput";
import { MigrationFlowOrderByInput } from "./MigrationFlowOrderByInput";

export type MigrationFlowFindManyArgs = {
  where?: MigrationFlowWhereInput;
  orderBy?: Array<MigrationFlowOrderByInput>;
  skip?: number;
  take?: number;
};
