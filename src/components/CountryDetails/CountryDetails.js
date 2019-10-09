import React, { Component } from "react";
import axios from "axios";
import Numeral from "numeral";
import { Link } from "react-router-dom";
import styles from "./CountryDetails.module.scss";
import NavBar from "../NavBar/NavBar";
import BorderCountries from "./BorderCountries/BorderCountries";

class CountryDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryDetails: null
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://restcountries.eu/rest/v2/name/${this.props.match.params.countryName}`
      )
      .then(response => {
        // console.log(this.props.match.params.countryName, response.data[0]);
        this.setState(() => ({
          countryDetails: response.data[0]
        }));
      })
      .catch(error => console.log(error));
  }
  componentDidUpdate(prevProps) {
    //detect if url key is changing and then update the state based on that
    if (prevProps.location.key !== this.props.location.key) {
      axios
        .get(
          `https://restcountries.eu/rest/v2/name/${this.props.match.params.countryName}`
        )
        .then(response => {
          this.setState(() => ({ countryDetails: response.data[0] }));
        })
        .catch(error => console.log(error));
    }
  }

  render() {
    const { darkMode, appModeChanger, totalCountries } = this.props;
    const { countryDetails } = this.state;
    return (
      <React.Fragment>
        <header className={styles.countryDetails}>
          <NavBar darkMode={darkMode} appModeChanger={appModeChanger} />
          <Link
            to="/"
            className={darkMode ? "dark darkElements" : "light lightElements"}
          >
            Back
          </Link>
        </header>
        <main
          className={`${styles.countryDetails} ${darkMode ? `dark` : `light`}`}
        >
          {this.props.match.params.countryName}
          {countryDetails && (
            <React.Fragment>
              <p>
                <img
                  src={countryDetails.flag}
                  alt={`${countryDetails.name} flag`}
                />
              </p>
              <p>{countryDetails.nativeName}</p>
              <p>{Numeral(countryDetails.population).format(0, 0)}</p>
              <p>{countryDetails.region}</p>
              <p>{countryDetails.subregion}</p>
              <p>{countryDetails.capital}</p>
              <p>{countryDetails.topLevelDomain}</p>
              <p>{countryDetails.currencies[0].name}</p>
              <React.Fragment>
                <h3>languages:</h3>
                {countryDetails.languages.map(({ name }) => (
                  <p key={name}>{name}</p>
                ))}
              </React.Fragment>
              {totalCountries && (
                <BorderCountries
                  {...{ totalCountries, countryDetails }}
                  darkMode={darkMode}
                />
              )}
            </React.Fragment>
          )}
        </main>
      </React.Fragment>
    );
  }
}

export default CountryDetails;
