import React, { Component } from "react";
import axios from "axios";
import styles from "./Dashboard.module.scss";
import NavBar from "../NavBar/NavBar";
import FilterBar from "./FilterBar/FilterBar";
import CountryList from "./CountryList/CountryList";
class Dashboard extends Component {
  state = {
    totalCountries: [],
    filteredCountries: [],
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
    // alert(region);
    this.setState(
      () => ({ regionFilter: region }),
      this.updateFilteredCountries
    );
  };

  //update the filtered countries list based on the current search field
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
  //update the filtered countries list based on the current search field
  updateFilteredCountriesBasedOnRegionFilter = () => {
    this.setState(prevState => {
      const {
        regionFilter,
        totalCountries,
        filteredCountries,
        countrySearchField
      } = prevState;

      let tempFilteredCountries = countrySearchField
        ? filteredCountries
        : totalCountries;
      console.log("regionfilter", tempFilteredCountries);

      tempFilteredCountries = tempFilteredCountries.filter(country => {
        console.log(
          "regionfilter",
          regionFilter,
          "countryregion",
          country.region
        );
        return country.region.toLowerCase() === regionFilter.toLowerCase();
      });
      console.log("regionfilter", tempFilteredCountries);
      return { filteredCountries: tempFilteredCountries };
    });
  };

  componentDidMount() {
    // fetch the countrylist data from the api
    axios
      .get(`https://restcountries.eu/rest/v2/all`)
      .then(res => {
        this.setState(() => ({
          totalCountries: res.data,
          filteredCountries: res.data
        }));
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
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
        <main className="dashboard">
          <CountryList filteredCountries={filteredCountries} />
        </main>
        {/* <footer className="dashboard"></footer> */}
      </React.Fragment>
    );
  }
}
export default Dashboard;
