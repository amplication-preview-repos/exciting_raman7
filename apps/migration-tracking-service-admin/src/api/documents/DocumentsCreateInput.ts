import { MigrantsWhereUniqueInput } from "../migrants/MigrantsWhereUniqueInput";

export type DocumentsCreateInput = {
  description?: string | null;
  migrant?: MigrantsWhereUniqueInput | null;
  typeField?: string | null;
};
