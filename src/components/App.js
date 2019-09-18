import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import Dashboard from "./Dashboard/Dashboard";
import CountryDetails from "./CountryDetails/CountryDetails";
import NotFound from "./NotFoundPage/NotFound";

class App extends Component {
  state = {
    darkMode: true
  };

  appModeChanger = () => {
    this.setState(prevState => ({ darkMode: !prevState.darkMode }));
  };

  render() {
    const { darkMode } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={routeProps => (
              <Dashboard
                {...routeProps}
                darkMode={darkMode}
                appModeChanger={this.appModeChanger}
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
