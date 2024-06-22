import { DeparturePointCreateNestedManyWithoutCountriesInput } from "./DeparturePointCreateNestedManyWithoutCountriesInput";
import { EntryPointCreateNestedManyWithoutCountriesInput } from "./EntryPointCreateNestedManyWithoutCountriesInput";
import { RegionCreateNestedManyWithoutCountriesInput } from "./RegionCreateNestedManyWithoutCountriesInput";

export type CountryCreateInput = {
  code?: string | null;
  departurePoints?: DeparturePointCreateNestedManyWithoutCountriesInput;
  entryPoints?: EntryPointCreateNestedManyWithoutCountriesInput;
  name?: string | null;
  population?: number | null;
  regions?: RegionCreateNestedManyWithoutCountriesInput;
};
