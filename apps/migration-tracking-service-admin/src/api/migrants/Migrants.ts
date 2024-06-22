import { Documents } from "../documents/Documents";
import { MigrationFlow } from "../migrationFlow/MigrationFlow";

export type Migrants = {
  age: number | null;
  createdAt: Date;
  documentsItems?: Array<Documents>;
  firstName: string | null;
  gender: string | null;
  id: string;
  lastName: string | null;
  migrationFlow?: MigrationFlow | null;
  updatedAt: Date;
};
