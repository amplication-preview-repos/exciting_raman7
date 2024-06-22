import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { DocumentsTitle } from "../documents/DocumentsTitle";
import { MigrationFlowTitle } from "../migrationFlow/MigrationFlowTitle";

export const MigrantsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="age" source="age" />
        <ReferenceArrayInput
          source="documentsItems"
          reference="Documents"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DocumentsTitle} />
        </ReferenceArrayInput>
        <TextInput label="firstName" source="firstName" />
        <TextInput label="gender" source="gender" />
        <TextInput label="lastName" source="lastName" />
        <ReferenceInput
          source="migrationFlow.id"
          reference="MigrationFlow"
          label="migrationFlow"
        >
          <SelectInput optionText={MigrationFlowTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};