import React, { useState } from "react";
import styles from "./FilterBar.module.scss";

const FilterBar = ({
  countrySearchField,
  darkMode,
  regionFilter,
  onCountrySearchFieldChange,
  onRegionChange
}) => {
  const [dropDownFilterStatus, setDropDownFilterStatus] = useState(false);
  return (
    <div
      className={`${styles.filterBar} ${styles.container} ${
        darkMode ? styles.dark : styles.light
      }`}
    >
      <span>
        <i className="fas fa-search"></i>
        <input
          type="text"
          placeholder="Search for a country..."
          onChange={e => onCountrySearchFieldChange(e.target.value)}
          value={countrySearchField}
        />
      </span>
      {/*this section gets filled with mock data for now,
        it'll get populated with the api's data later */}
      <div className={styles.regionFilter}>
        <div onClick={() => setDropDownFilterStatus(!dropDownFilterStatus)}>
          {regionFilter
            ? regionFilter.charAt(0).toUpperCase() + regionFilter.slice(1)
            : "Filter by Region"}
        </div>
        {regionFilter && (
          <button onClick={() => onRegionChange("")}>
            <i className="fas fa-times"></i>
          </button>
        )}
        {dropDownFilterStatus && (
          <ul
            onClick={async e => {
              await onRegionChange(e.target.innerHTML);
              setDropDownFilterStatus(!dropDownFilterStatus);
            }}
          >
            <li>africa</li>
            <li>america</li>
            <li>asia</li>
            <li>europe</li>
            <li>oceania</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default FilterBar;
