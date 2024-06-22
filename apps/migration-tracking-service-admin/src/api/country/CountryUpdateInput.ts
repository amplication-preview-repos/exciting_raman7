import { DeparturePointUpdateManyWithoutCountriesInput } from "./DeparturePointUpdateManyWithoutCountriesInput";
import { EntryPointUpdateManyWithoutCountriesInput } from "./EntryPointUpdateManyWithoutCountriesInput";
import { RegionUpdateManyWithoutCountriesInput } from "./RegionUpdateManyWithoutCountriesInput";

export type CountryUpdateInput = {
  code?: string | null;
  departurePoints?: DeparturePointUpdateManyWithoutCountriesInput;
  entryPoints?: EntryPointUpdateManyWithoutCountriesInput;
  name?: string | null;
  population?: number | null;
  regions?: RegionUpdateManyWithoutCountriesInput;
};
