import React, { Component } from "react";
import axios from "axios";
import Numeral from "numeral";
import { Link, Redirect } from "react-router-dom";
import styles from "./CountryDetails.module.scss";
import NavBar from "../NavBar/NavBar";
import Loading from "../Loading/Loading";
import BorderCountries from "./BorderCountries/BorderCountries";

class CountryDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryDetails: null,
      notFoundStatus: false
    };
  }

  //redirect function
  onRedirect = () => {
    return this.state.redirect && <Redirect to="/404" />;
  };

  componentDidMount() {
    //set the document's title based on the current country
    document.title = this.props.match.params.countryName;
    //get the necessary data for the current country
    axios
      .get(
        `https://raw.githubusercontent.com/sinamoraddar/REST-Countries-API-with-color-theme-switcher--API/master/all.json`
      )
      .then(response => {
        // console.log(this.props.match.params.countryName, response.data[0]);
        //search for the current country in the countries list
        const tempCountryDetails = response.data.find(
          country => country.name === this.props.match.params.countryName
        );
        if (tempCountryDetails) {
          this.setState(() => ({
            countryDetails: tempCountryDetails
          }));
        } else {
          this.setState(() => ({ countryDetails: true, notFoundStatus: true }));
        }
      })
      .catch(error => console.log(error));
  }
  componentDidUpdate(prevProps) {
    //detect if the url key is changing and then update the state based on that
    if (prevProps.location.key !== this.props.location.key) {
      axios
        .get(
          `https://raw.githubusercontent.com/sinamoraddar/REST-Countries-API-with-color-theme-switcher--API/master/all.json`
        )
        .then(response => {
          const tempCountryDetails = response.data.find(
            country => country.name === this.props.match.params.countryName
          );
          this.setState(() => ({ countryDetails: tempCountryDetails }));
        })
        .catch(error => console.log(error));
    }
  }

  render() {
    const { darkMode, appModeChanger, totalCountries, homePage } = this.props;
    const { countryDetails, notFoundStatus } = this.state;
    return (
      <React.Fragment>
        <header
          className={`${styles.countryDetails} ${darkMode ? `dark` : `light`}`}
        >
          <NavBar
            darkMode={darkMode}
            homePage={homePage}
            appModeChanger={appModeChanger}
          />
          <Link
            to={homePage}
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
          {/* if the country details have not been fetched yet -> show loading gif
              if done-> show the details
          */}
          {countryDetails ? (
            /* show a message if the country ain't available in our database,
            otherwise show the content */
            notFoundStatus ? (
              <p className={styles.error}>
                sorry we we have no idea about the thing you're looking for
              </p>
            ) : (
              <React.Fragment>
                <div className={styles.flag}>
                  <img
                    src={`https://cdn.rawgit.com/hjnilsson/country-flags/master/svg/${countryDetails.alpha2Code.toLowerCase()}.svg`}
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
                              darkMode
                                ? styles.darkDetails
                                : styles.lightDetails
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
                      homePage={homePage}
                    />
                  )}
                </div>
              </React.Fragment>
            )
          ) : (
            <Loading darkMode={darkMode} homePage={homePage} />
          )}
        </main>
      </React.Fragment>
    );
  }
}

export default CountryDetails;
