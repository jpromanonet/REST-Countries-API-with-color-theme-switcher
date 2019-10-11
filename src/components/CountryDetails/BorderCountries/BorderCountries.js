import React from "react";
import { Link } from "react-router-dom";

//create the adjcent countries list
//based on the borders of the current country
const borderMaker = (totalCountries, countryDetails, darkMode) => {
  // create the adjacent countries list =>
  //1- check through total countries list for those countries
  //whose alpha3code is included in the borders list of the current country
  //2-add the country to the borderCountries' list
  let borderCountries = totalCountries.filter(country => {
    return countryDetails.borders.includes(country.alpha3Code);
  });

  //create a seperate link for each country
  borderCountries = borderCountries.map(country => (
    <p key={country.name}>
      <Link to={`/${country.name}`} className={darkMode ? `dark` : `light`}>
        {country.name}
      </Link>
    </p>
  ));
  //only return the list when the list isn't empty
  return (
    borderCountries.length !== 0 && (
      <React.Fragment>
        <h3>borders:</h3>
        {borderCountries}
      </React.Fragment>
    )
  );
};
const BorderCountries = ({ totalCountries, countryDetails, darkMode }) => (
  <div className={darkMode ? "dark" : "light"}>
    {borderMaker(totalCountries, countryDetails, darkMode)}
  </div>
);

export default BorderCountries;
