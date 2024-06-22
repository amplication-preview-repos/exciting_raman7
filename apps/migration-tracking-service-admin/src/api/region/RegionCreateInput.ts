import { CityCreateNestedManyWithoutRegionsInput } from "./CityCreateNestedManyWithoutRegionsInput";
import { CountryWhereUniqueInput } from "../country/CountryWhereUniqueInput";

export type RegionCreateInput = {
  cities?: CityCreateNestedManyWithoutRegionsInput;
  country?: CountryWhereUniqueInput | null;
  name?: string | null;
};
