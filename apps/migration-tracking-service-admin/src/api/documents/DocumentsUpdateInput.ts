import { MigrantsWhereUniqueInput } from "../migrants/MigrantsWhereUniqueInput";

export type DocumentsUpdateInput = {
  description?: string | null;
  migrant?: MigrantsWhereUniqueInput | null;
  typeField?: string | null;
};
