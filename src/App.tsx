import React from "react";
import "./App.css";
import { Characters } from "./containers/Characters";
import { Locations } from "./containers/Locations";
import { Episodes } from "./containers/Episodes";
import { Switch, Route } from "react-router-dom";
import { ClickGame } from "./containers/ClickGame";
import { Form } from "./containers/Form";
import { NavBar } from "./components/NavBar";
import { LocationsGQL } from "./containers/LocationsGQL";

/* 
	todo
	finish styling cards
	tab navigation for different sections
	pagination for the different tabbed sections
	try doing some simple stuff with GQL / Apollo
*/

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="AppContainer">
        <Switch>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/click">
            <ClickGame />
          </Route>
          <Route path="/locations">
            <Locations />
          </Route>
          <Route path="/locations-gql">
            <LocationsGQL />
          </Route>
          <Route path="/episodes">
            <Episodes />
          </Route>
          <Route path="/">
            <Characters />
            <Locations />
            <Episodes />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
