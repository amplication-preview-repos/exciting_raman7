import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MigrationFlowList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MigrationFlows"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="date" source="date" />
        <TextField label="destinationCountry" source="destinationCountry" />
        <TextField label="ID" source="id" />
        <TextField label="numberOfMigrants" source="numberOfMigrants" />
        <TextField label="originCountry" source="originCountry" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
