import React from "react";
import CountryItem from "./CountryItem/CountryItem";
import Pagination from "./Pagination/Pagination";
import styles from "./CountryList.module.scss";

const CountryList = ({ filteredCountries }) => {
  console.log("filtered countries -->", filteredCountries);
  return (
    <React.Fragment>
      CountryList goes here
      {filteredCountries.map(country => (
        <CountryItem key={country.name} {...country} />
      ))}
      <Pagination />
    </React.Fragment>
  );
};
export default CountryList;
