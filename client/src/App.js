/* eslint-disable jsx-a11y/alt-text */
import "./App.css";

import { Route, Switch } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Home from "./components/home/Home";
import CountryDetails from "./components/countryDetails/countryDetails";
import CreateActivity from "./components/Activities/CreateActivity/CreateActivity";
import ShowActivities from "./components/Activities/ShowActivities/ShowActivities";
import Page404 from "./components/page404/page404";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/countryDatails/:id" component={CountryDetails} />
        <Route exact path="/createActivity" component={CreateActivity} />
        <Route exact path="/updateActivity/:id" component={CreateActivity} />
        <Route exact path="/showActivities" component={ShowActivities} />
        <Route path="*" component={Page404} />
      </Switch>
    </div>
  );
}

export default App;
