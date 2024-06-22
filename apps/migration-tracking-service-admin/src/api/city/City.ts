import { Region } from "../region/Region";

export type City = {
  createdAt: Date;
  id: string;
  name: string | null;
  population: number | null;
  region?: Region | null;
  updatedAt: Date;
};
