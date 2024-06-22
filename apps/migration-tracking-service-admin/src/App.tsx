import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { MigrationFlowList } from "./migrationFlow/MigrationFlowList";
import { MigrationFlowCreate } from "./migrationFlow/MigrationFlowCreate";
import { MigrationFlowEdit } from "./migrationFlow/MigrationFlowEdit";
import { MigrationFlowShow } from "./migrationFlow/MigrationFlowShow";
import { CountryList } from "./country/CountryList";
import { CountryCreate } from "./country/CountryCreate";
import { CountryEdit } from "./country/CountryEdit";
import { CountryShow } from "./country/CountryShow";
import { RegionList } from "./region/RegionList";
import { RegionCreate } from "./region/RegionCreate";
import { RegionEdit } from "./region/RegionEdit";
import { RegionShow } from "./region/RegionShow";
import { MigrantsList } from "./migrants/MigrantsList";
import { MigrantsCreate } from "./migrants/MigrantsCreate";
import { MigrantsEdit } from "./migrants/MigrantsEdit";
import { MigrantsShow } from "./migrants/MigrantsShow";
import { CityList } from "./city/CityList";
import { CityCreate } from "./city/CityCreate";
import { CityEdit } from "./city/CityEdit";
import { CityShow } from "./city/CityShow";
import { DocumentsList } from "./documents/DocumentsList";
import { DocumentsCreate } from "./documents/DocumentsCreate";
import { DocumentsEdit } from "./documents/DocumentsEdit";
import { DocumentsShow } from "./documents/DocumentsShow";
import { EntryPointList } from "./entryPoint/EntryPointList";
import { EntryPointCreate } from "./entryPoint/EntryPointCreate";
import { EntryPointEdit } from "./entryPoint/EntryPointEdit";
import { EntryPointShow } from "./entryPoint/EntryPointShow";
import { DeparturePointList } from "./departurePoint/DeparturePointList";
import { DeparturePointCreate } from "./departurePoint/DeparturePointCreate";
import { DeparturePointEdit } from "./departurePoint/DeparturePointEdit";
import { DeparturePointShow } from "./departurePoint/DeparturePointShow";
import { AdminList } from "./admin/AdminList";
import { AdminCreate } from "./admin/AdminCreate";
import { AdminEdit } from "./admin/AdminEdit";
import { AdminShow } from "./admin/AdminShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"MigrationTrackingService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="MigrationFlow"
          list={MigrationFlowList}
          edit={MigrationFlowEdit}
          create={MigrationFlowCreate}
          show={MigrationFlowShow}
        />
        <Resource
          name="Country"
          list={CountryList}
          edit={CountryEdit}
          create={CountryCreate}
          show={CountryShow}
        />
        <Resource
          name="Region"
          list={RegionList}
          edit={RegionEdit}
          create={RegionCreate}
          show={RegionShow}
        />
        <Resource
          name="Migrants"
          list={MigrantsList}
          edit={MigrantsEdit}
          create={MigrantsCreate}
          show={MigrantsShow}
        />
        <Resource
          name="City"
          list={CityList}
          edit={CityEdit}
          create={CityCreate}
          show={CityShow}
        />
        <Resource
          name="Documents"
          list={DocumentsList}
          edit={DocumentsEdit}
          create={DocumentsCreate}
          show={DocumentsShow}
        />
        <Resource
          name="EntryPoint"
          list={EntryPointList}
          edit={EntryPointEdit}
          create={EntryPointCreate}
          show={EntryPointShow}
        />
        <Resource
          name="DeparturePoint"
          list={DeparturePointList}
          edit={DeparturePointEdit}
          create={DeparturePointCreate}
          show={DeparturePointShow}
        />
        <Resource
          name="Admin"
          list={AdminList}
          edit={AdminEdit}
          create={AdminCreate}
          show={AdminShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
