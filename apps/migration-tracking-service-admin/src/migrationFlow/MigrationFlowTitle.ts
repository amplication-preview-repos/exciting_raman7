import { MigrationFlow as TMigrationFlow } from "../api/migrationFlow/MigrationFlow";

export const MIGRATIONFLOW_TITLE_FIELD = "destinationCountry";

export const MigrationFlowTitle = (record: TMigrationFlow): string => {
  return record.destinationCountry?.toString() || String(record.id);
};
