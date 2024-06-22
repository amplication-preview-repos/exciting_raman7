import { RegionWhereUniqueInput } from "../region/RegionWhereUniqueInput";

export type CityUpdateInput = {
  name?: string | null;
  population?: number | null;
  region?: RegionWhereUniqueInput | null;
};
