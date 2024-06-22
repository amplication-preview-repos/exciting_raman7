import { CityUpdateManyWithoutRegionsInput } from "./CityUpdateManyWithoutRegionsInput";
import { CountryWhereUniqueInput } from "../country/CountryWhereUniqueInput";

export type RegionUpdateInput = {
  cities?: CityUpdateManyWithoutRegionsInput;
  country?: CountryWhereUniqueInput | null;
  name?: string | null;
};
