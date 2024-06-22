import { Migrants } from "../migrants/Migrants";

export type MigrationFlow = {
  createdAt: Date;
  date: Date | null;
  destinationCountry: string | null;
  id: string;
  migrantsItems?: Array<Migrants>;
  numberOfMigrants: number | null;
  originCountry: string | null;
  updatedAt: Date;
};
