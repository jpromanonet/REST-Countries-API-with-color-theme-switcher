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
        darkMode ? `dark` : `light`
      }`}
    >
      {/* search bar */}
      <span className={darkMode ? `darkElements` : `lightElements`}>
        <i className="fas fa-search"></i>
        <input
          type="text"
          placeholder="Search for a country..."
          onChange={e => onCountrySearchFieldChange(e.target.value)}
          value={countrySearchField}
        />
      </span>
      {/* region filter changer */}
      <div className={styles.regionFilter}>
        <div
          className={darkMode ? `darkElements` : `lightElements`}
          onClick={() => setDropDownFilterStatus(!dropDownFilterStatus)}
        >
          {regionFilter
            ? regionFilter.charAt(0).toUpperCase() + regionFilter.slice(1)
            : "Filter by Region"}
        </div>
        {regionFilter && (
          <button
            className={darkMode ? `darkElements` : `lightElements`}
            onClick={() => onRegionChange("")}
          >
            <i className="fas fa-times"></i>
          </button>
        )}
        {dropDownFilterStatus && (
          <ul
            className={darkMode ? `darkElements` : `lightElements`}
            onClick={async e => {
              await onRegionChange(e.target.innerHTML);
              setDropDownFilterStatus(!dropDownFilterStatus);
            }}
          >
            <li>africa</li>
            <li>americas</li>
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
