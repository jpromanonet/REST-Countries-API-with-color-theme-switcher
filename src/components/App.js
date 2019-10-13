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
    totalCountries: [],
    //determine the homepage path based on the development mode
    homePage:
      process.env.NODE_ENV === "development"
        ? "/"
        : "/REST-Countries-API-with-color-theme-switcher/"
  };
  //change the darkmode state based on user interaction
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
    const { darkMode, totalCountries, homePage } = this.state;
    console.log(homePage);

    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path={`${homePage}`}
            render={routeProps => (
              <Dashboard
                {...routeProps}
                appModeChanger={this.appModeChanger}
                darkMode={darkMode}
                homePage={homePage}
                totalCountries={totalCountries}
              />
            )}
          ></Route>
          <Route
            exact
            path={`${homePage}:countryName`}
            render={routeProps => (
              <CountryDetails
                {...routeProps}
                darkMode={darkMode}
                homePage={homePage}
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
