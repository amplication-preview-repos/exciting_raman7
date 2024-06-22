import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { MIGRATIONFLOW_TITLE_FIELD } from "./MigrationFlowTitle";

export const MigrationFlowShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="date" source="date" />
        <TextField label="destinationCountry" source="destinationCountry" />
        <TextField label="ID" source="id" />
        <TextField label="numberOfMigrants" source="numberOfMigrants" />
        <TextField label="originCountry" source="originCountry" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Migrants"
          target="migrationFlowId"
          label="MigrantsItems"
        >
          <Datagrid rowClick="show">
            <TextField label="age" source="age" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="firstName" source="firstName" />
            <TextField label="gender" source="gender" />
            <TextField label="ID" source="id" />
            <TextField label="lastName" source="lastName" />
            <ReferenceField
              label="migrationFlow"
              source="migrationflow.id"
              reference="MigrationFlow"
            >
              <TextField source={MIGRATIONFLOW_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
