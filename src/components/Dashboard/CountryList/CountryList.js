import React, { useState, useEffect } from "react";
import CountryItem from "./CountryItem/CountryItem";
import Pagination from "./Pagination/Pagination";
import styles from "./CountryList.module.scss";

const CountryList = ({ filteredCountries, darkMode }) => {
  //currentpage,pageCountriesLimit,
  //pagination should have 5 sections ->{<leftNegighbot,currentpage,...,lastPage,rightNeighbor>}
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  // console.log("filtered countries -->", filteredCountries);
  // console.log("totalpages--->", totalPages);
  //update totalpages based on the current list of filtered countries
  useEffect(() => {
    const tempTotalPages =
      filteredCountries.length > 10
        ? Math.floor(filteredCountries.length / 10)
        : 1;
    setTotalPages(tempTotalPages);
  }, [filteredCountries]);
  //update the currentPage whenever the filteredcountries changes
  useEffect(() => {
    setCurrentPage(0);
  }, [filteredCountries]);
  return (
    <section className={styles.countryList}>
      <div>
        {/* show only 10 countries per page based on the filtered countries */}
        {filteredCountries
          .slice(currentPage * 10, currentPage * 10 + 10)
          .map(country => (
            <CountryItem key={country.name} {...country} darkMode={darkMode} />
          ))}
      </div>
      <Pagination
        currentPage={currentPage}
        darkMode={darkMode}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </section>
  );
};
export default CountryList;
