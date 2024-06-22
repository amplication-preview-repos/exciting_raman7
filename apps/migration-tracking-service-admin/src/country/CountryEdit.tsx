import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { DeparturePointTitle } from "../departurePoint/DeparturePointTitle";
import { EntryPointTitle } from "../entryPoint/EntryPointTitle";
import { RegionTitle } from "../region/RegionTitle";

export const CountryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="code" source="code" />
        <ReferenceArrayInput
          source="departurePoints"
          reference="DeparturePoint"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DeparturePointTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="entryPoints"
          reference="EntryPoint"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EntryPointTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="population" source="population" />
        <ReferenceArrayInput
          source="regions"
          reference="Region"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RegionTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
