import { Documents as TDocuments } from "../api/documents/Documents";

export const DOCUMENTS_TITLE_FIELD = "typeField";

export const DocumentsTitle = (record: TDocuments): string => {
  return record.typeField?.toString() || String(record.id);
};
