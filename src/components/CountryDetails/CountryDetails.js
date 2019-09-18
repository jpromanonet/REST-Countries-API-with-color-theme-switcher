import React from "react";
import styles from "./CountryDetails.module.scss";
import NavBar from "../NavBar/NavBar";

const CountryDetails = props => (
  <React.Fragment>
    <header className={styles.countryDetails}>
      <NavBar darkMode={props.darkMode} appModeChanger={props.appModeChanger} />
    </header>
    <main className={`${props.darkMode ? styles.dark : styles.light}`}>hi</main>
  </React.Fragment>
);

export default CountryDetails;
