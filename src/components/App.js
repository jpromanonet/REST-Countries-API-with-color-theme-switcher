import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import Dashboard from "./Dashboard/Dashboard";
import CountryDetails from "./CountryDetails/CountryDetails";
import NotFound from "./NotFoundPage/NotFound";

class App extends Component {
  state = {
    countrySearchField: "",
    darkMode: true,
    regionFilter: ""
  };

  appModeChanger = () => {
    this.setState(prevState => ({ darkMode: !prevState.darkMode }));
  };

  onCountrySearchFieldChange = counrty => {
    this.setState(() => ({ countrySearchField: counrty }));
  };

  onRegionChange = region => {
    // alert(region);
    this.setState(() => ({ regionFilter: region }));
  };

  render() {
    const { darkMode, regionFilter, countrySearchField } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={routeProps => (
              <Dashboard
                {...routeProps}
                appModeChanger={this.appModeChanger}
                countrySearchField={countrySearchField}
                darkMode={darkMode}
                regionFilter={regionFilter}
                onCountrySearchFieldChange={this.onCountrySearchFieldChange}
                onRegionChange={this.onRegionChange}
              />
            )}
          ></Route>
          <Route
            exact
            path="/:countryName"
            render={routeProps => (
              <CountryDetails
                {...routeProps}
                darkMode={darkMode}
                appModeChanger={this.appModeChanger}
              />
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
