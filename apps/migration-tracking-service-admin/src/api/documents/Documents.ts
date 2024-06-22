import { Migrants } from "../migrants/Migrants";

export type Documents = {
  createdAt: Date;
  description: string | null;
  id: string;
  migrant?: Migrants | null;
  typeField: string | null;
  updatedAt: Date;
};
