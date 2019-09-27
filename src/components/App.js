import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import Dashboard from "./Dashboard/Dashboard";
import CountryDetails from "./CountryDetails/CountryDetails";
import NotFound from "./NotFoundPage/NotFound";

class App extends Component {
  state = {
    darkMode: true,
    totalCountries: []
  };

  appModeChanger = () => {
    this.setState(prevState => ({ darkMode: !prevState.darkMode }));
  };

  componentDidMount() {
    // fetch the countrylist data from the api
    axios
      .get(`https://restcountries.eu/rest/v2/all`)
      .then(res => {
        this.setState(() => ({
          totalCountries: res.data
        }));
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const {
      countries,
      darkMode,
      totalCountries,
      countrySearchField
    } = this.state;
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
                darkMode={darkMode}
                totalCountries={totalCountries}
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
                totalCountries={totalCountries}
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
