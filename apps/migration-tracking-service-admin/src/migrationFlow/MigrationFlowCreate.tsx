import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { MigrantsTitle } from "../migrants/MigrantsTitle";

export const MigrationFlowCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
        <TextInput label="destinationCountry" source="destinationCountry" />
        <ReferenceArrayInput
          source="migrantsItems"
          reference="Migrants"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MigrantsTitle} />
        </ReferenceArrayInput>
        <NumberInput
          step={1}
          label="numberOfMigrants"
          source="numberOfMigrants"
        />
        <TextInput label="originCountry" source="originCountry" />
      </SimpleForm>
    </Create>
  );
};
