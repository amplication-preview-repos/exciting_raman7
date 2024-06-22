import { DeparturePoint } from "../departurePoint/DeparturePoint";
import { EntryPoint } from "../entryPoint/EntryPoint";
import { Region } from "../region/Region";

export type Country = {
  code: string | null;
  createdAt: Date;
  departurePoints?: Array<DeparturePoint>;
  entryPoints?: Array<EntryPoint>;
  id: string;
  name: string | null;
  population: number | null;
  regions?: Array<Region>;
  updatedAt: Date;
};
