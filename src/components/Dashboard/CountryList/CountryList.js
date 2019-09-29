import React, { useState, useEffect } from "react";
import CountryItem from "./CountryItem/CountryItem";
import Pagination from "./Pagination/Pagination";
import styles from "./CountryList.module.scss";

const CountryList = ({ filteredCountries }) => {
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
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
      <div>
        {filteredCountries
          .slice(currentPage * 10, currentPage * 10 + 10)
          .map(country => (
            <CountryItem key={country.name} {...country} />
          ))}
      </div>
    </section>
  );
};
export default CountryList;
