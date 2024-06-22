import { EntryPoint as TEntryPoint } from "../api/entryPoint/EntryPoint";

export const ENTRYPOINT_TITLE_FIELD = "name";

export const EntryPointTitle = (record: TEntryPoint): string => {
  return record.name?.toString() || String(record.id);
};
