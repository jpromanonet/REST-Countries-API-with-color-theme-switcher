import React, { Component } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import styles from "./CountryDetails.module.scss";
import NavBar from "../NavBar/NavBar";

class CountryDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCountries: null,
      countryDetails: null
    };
  }

  //create the adjcent countries list
  //based on the borders of the current country
  borderMaker = () => {
    let borderCountries = this.state.totalCountries.filter(country => {
      return this.state.countryDetails.borders.includes(country.alpha3Code);
    });

    borderCountries = borderCountries.map(country => (
      <p key={country.name}>
        <Link to={`/${country.name}`}>{country.name}</Link>
      </p>
    ));
    return (
      borderCountries.length !== 0 && (
        <React.Fragment>
          <h3>borders:</h3>
          {borderCountries}
        </React.Fragment>
      )
    );
  };

  componentDidMount() {
    axios
      .get(
        `https://restcountries.eu/rest/v2/name/${this.props.match.params.countryName}`
      )
      .then(response => {
        console.log(this.props.match.params.countryName, response.data[0]);
        this.setState(() => ({
          countryDetails: response.data[0],
          totalCountries: this.props.totalCountries
        }));
      })
      .catch(error => console.log(error));
  }
  componentDidUpdate(prevProps) {
    const { totalCountries } = this.props;
    if (prevProps.totalCountries !== totalCountries) {
      this.setState(() => {
        return { totalCountries };
      });
    }
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
    const { darkMode, appModeChanger } = this.props;
    const { countryDetails, totalCountries } = this.state;
    return (
      <React.Fragment>
        <header className={styles.countryDetails}>
          <NavBar darkMode={darkMode} appModeChanger={appModeChanger} />
        </header>
        <main className={`${styles.countryDetails} ${darkMode ? styles.dark : styles.light}`}>
          {this.props.match.params.countryName}
          {countryDetails && (
            <React.Fragment>
              <p>{countryDetails.nativeName}</p>
              <p>{countryDetails.population}</p>
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
              {totalCountries && this.borderMaker()}
            </React.Fragment>
          )}
        </main>
      </React.Fragment>
    );
  }
}

export default CountryDetails;
