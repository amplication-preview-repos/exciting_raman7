import { RegionWhereUniqueInput } from "../region/RegionWhereUniqueInput";

export type CityCreateInput = {
  name?: string | null;
  population?: number | null;
  region?: RegionWhereUniqueInput | null;
};
