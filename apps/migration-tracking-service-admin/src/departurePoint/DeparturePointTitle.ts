import { DeparturePoint as TDeparturePoint } from "../api/departurePoint/DeparturePoint";

export const DEPARTUREPOINT_TITLE_FIELD = "name";

export const DeparturePointTitle = (record: TDeparturePoint): string => {
  return record.name?.toString() || String(record.id);
};
