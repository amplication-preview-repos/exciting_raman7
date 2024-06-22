import { Migrants as TMigrants } from "../api/migrants/Migrants";

export const MIGRANTS_TITLE_FIELD = "firstName";

export const MigrantsTitle = (record: TMigrants): string => {
  return record.firstName?.toString() || String(record.id);
};
