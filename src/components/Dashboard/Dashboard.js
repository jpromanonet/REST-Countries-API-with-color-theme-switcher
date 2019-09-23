import React, { Component } from "react";
import styles from "./Dashboard.module.scss";
import NavBar from "../NavBar/NavBar";
import FilterBar from "./FilterBar/FilterBar";

class Dashboard extends Component {
  // this.steate
  render() {
    return (
      <React.Fragment>
        <header className={styles.dashboard}>
          <NavBar
            darkMode={this.props.darkMode}
            appModeChanger={this.props.appModeChanger}
          />
          <FilterBar
            countrySearchField={this.props.countrySearchField}
            darkMode={this.props.darkMode}
            regionFilter={this.props.regionFilter}
            onCountrySearchFieldChange={this.props.onCountrySearchFieldChange}
            onRegionChange={this.props.onRegionChange}
          />
        </header>
        {/* <main className="dashboard"></main> */}
        {/* <footer className="dashboard"></footer> */}
      </React.Fragment>
    );
  }
}
export default Dashboard;
