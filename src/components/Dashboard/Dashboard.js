import React, { Component } from "react";
import axios from "axios";
import styles from "./Dashboard.module.scss";
import NavBar from "../NavBar/NavBar";
import FilterBar from "./FilterBar/FilterBar";
import CountryList from "./CountryList/CountryList";
class Dashboard extends Component {
  state = {
    totalCountries: this.props.totalCountries,
    filteredCountries: null,
    countriesListPage: 1,
    countrySearchField: "",
    regionFilter: ""
  };
  //update the state as the searchfield is changing
  onCountrySearchFieldChange = counrty => {
    this.setState(
      () => ({ countrySearchField: counrty }),
      this.updateFilteredCountries
    );
  };

  //update region filter based on the dropdown menu's current item
  onRegionChange = region => {
    this.setState(
      () => ({ regionFilter: region }),
      this.updateFilteredCountries
    );
  };

  //update the filtered countries list based on the current state
  updateFilteredCountries = () => {
    this.setState(prevState => {
      const { totalCountries, countrySearchField, regionFilter } = prevState;
      //filter based on searchfield
      let filteredCountries = totalCountries.filter(country => {
        return country.name
          .toLowerCase()
          .includes(countrySearchField.toLowerCase());
      });
      //filter based on region
      if (regionFilter) {
        filteredCountries = filteredCountries.filter(country => {
          return country.region.toLowerCase() === regionFilter.toLowerCase();
        });
      }
      return { filteredCountries };
    });
  };

  //update the state whenever the props change
  componentDidUpdate(prevProps) {
    if (this.props.totalCountries !== prevProps.totalCountries) {
      this.setState(() => ({
        totalCountries: this.props.totalCountries
      }));
    }
  }

  render() {
    console.log("this is from dashboard", this.props.totalCountries);
    const {
      countrySearchField,
      filteredCountries,
      totalCountries,
      countriesListPage,
      regionFilter
    } = this.state;
    return (
      <React.Fragment>
        <header className={styles.dashboard}>
          <NavBar
            darkMode={this.props.darkMode}
            appModeChanger={this.props.appModeChanger}
          />
          <FilterBar
            countrySearchField={countrySearchField}
            darkMode={this.props.darkMode}
            regionFilter={regionFilter}
            onCountrySearchFieldChange={this.onCountrySearchFieldChange}
            onRegionChange={this.onRegionChange}
          />
        </header>
        <main
          className={`${styles.dashboard} ${
            this.props.darkMode ? `dark` : `light`
          }`}
        >
          <CountryList
            filteredCountries={
              filteredCountries ? filteredCountries : totalCountries
            }
            darkMode={this.props.darkMode}
          />
        </main>
        {/* <footer className="dashboard"></footer> */}
      </React.Fragment>
    );
  }
}
export default Dashboard;
