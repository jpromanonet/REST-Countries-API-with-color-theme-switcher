import React, { useState, useEffect } from "react";
import CountryItem from "./CountryItem/CountryItem";
import Pagination from "./Pagination/Pagination";
import styles from "./CountryList.module.scss";

const CountryList = ({ filteredCountries, darkMode }) => {
  //currentpage,pageCountriesLimit,
  //pagination should have 5 sections ->{<leftNegighbot,currentpage,...,lastPage,rightNeighbor>}
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  //update totalpages based on the current list of filtered countries
  useEffect(() => {
    //calculate the number of totalpages if there are more than 8 countries available
    //otherwise set it to 1
    const tempTotalPages =
      filteredCountries.length > 8
        ? Math.ceil(filteredCountries.length / 8)
        : 1;
    setTotalPages(tempTotalPages);
  }, [filteredCountries]);
  //update the currentPage whenever the filteredcountries changes
  useEffect(() => {
    setCurrentPage(0);
  }, [filteredCountries]);
  return (
    <section className={styles.countryList}>
      {filteredCountries.length !== 0 ? (
        <React.Fragment>
          <div>
            {/* show only 8 countries per page based on the filtered countries */}
            {filteredCountries
              .slice(currentPage * 8, currentPage * 8 + 8)
              .map(country => (
                <CountryItem
                  key={country.name}
                  {...country}
                  darkMode={darkMode}
                />
              ))}
          </div>
          <Pagination
            currentPage={currentPage}
            darkMode={darkMode}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
        </React.Fragment>
      ) : (
          <p className={styles.error}>
            Oops, we have no idea what you're talking about
            <br />
            Search for something else
          </p>
      )}
    </section>
  );
};
export default CountryList;
