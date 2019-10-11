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
    //get the necessary data for the current country
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
    //detect if the url key is changing and then update the state based on that
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
        <header
          className={`${styles.countryDetails} ${darkMode ? `dark` : `light`}`}
        >
          <NavBar darkMode={darkMode} appModeChanger={appModeChanger} />
          <Link
            to="/"
            className={`${styles.backButton} ${
              darkMode ? "dark darkElements" : "light lightElements"
            }`}
          >
            <i className="fas fa-arrow-left"></i>
            Back
          </Link>
        </header>
        <main
          className={`${styles.countryDetails} ${styles.main}  ${
            darkMode ? `dark` : `light`
          }`}
        >
          {countryDetails ? (
            <React.Fragment>
              <div className={styles.flag}>
                <img
                  src={countryDetails.flag}
                  alt={`${countryDetails.name} flag`}
                />
              </div>
              <div className={styles.details}>
                <h1> {this.props.match.params.countryName}</h1>
                <div className={styles.detailsContainer}>
                  <div className={styles.mainDetails}>
                    <p>
                      Native Name:{" "}
                      <span
                        className={
                          darkMode ? styles.darkDetails : styles.lightDetails
                        }
                      >
                        {countryDetails.nativeName}{" "}
                      </span>
                    </p>
                    <p>
                      Population:{" "}
                      <span
                        className={
                          darkMode ? styles.darkDetails : styles.lightDetails
                        }
                      >
                        {Numeral(countryDetails.population).format(0, 0)}
                      </span>
                    </p>
                    <p>
                      Region:{" "}
                      <span
                        className={
                          darkMode ? styles.darkDetails : styles.lightDetails
                        }
                      >
                        {countryDetails.region}
                      </span>
                    </p>
                    <p>
                      Sub Region:{" "}
                      <span
                        className={
                          darkMode ? styles.darkDetails : styles.lightDetails
                        }
                      >
                        {" "}
                        {countryDetails.subregion}
                      </span>
                    </p>
                    <p>
                      Capital:{" "}
                      <span
                        className={
                          darkMode ? styles.darkDetails : styles.lightDetails
                        }
                      >
                        {" "}
                        {countryDetails.capital}
                      </span>
                    </p>
                  </div>
                  <div className={styles.additionalDetails}>
                    <p>
                      Top Level Domain:{" "}
                      <span
                        className={
                          darkMode ? styles.darkDetails : styles.lightDetails
                        }
                      >
                        {countryDetails.topLevelDomain}
                      </span>
                    </p>
                    <p>
                      Currencies:{" "}
                      <span
                        className={
                          darkMode ? styles.darkDetails : styles.lightDetails
                        }
                      >
                        {" "}
                        {countryDetails.currencies[0].name}
                      </span>
                    </p>
                    <p className={styles.languages}>
                      Languages :
                      {countryDetails.languages.map(({ name }) => (
                        <span
                          className={
                            darkMode ? styles.darkDetails : styles.lightDetails
                          }
                          key={name}
                        >
                          {name}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
                {totalCountries && (
                  <BorderCountries
                    {...{ totalCountries, countryDetails }}
                    darkMode={darkMode}
                  />
                )}
              </div>
            </React.Fragment>
          ) : (
            <img src="../../assets/pics/loading.gif" alt="loading" />
          )}
        </main>
      </React.Fragment>
    );
  }
}

export default CountryDetails;
