import React, { useState, useRef, useEffect } from "react";
import styles from "./FilterBar.module.scss";

/**
 * Hook that alerts clicks outside of the passed ref
 */
const useOutsideAlerter = (ref, setDropDownFilterStatus) => {
  /**
   * Alert if clicked on outside of element
   */
  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      setDropDownFilterStatus(false);
    }
  };
  useEffect(() => {
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
};

const FilterBar = ({
  countrySearchField,
  darkMode,
  regionFilter,
  onCountrySearchFieldChange,
  onRegionChange
}) => {
  const [dropDownFilterStatus, setDropDownFilterStatus] = useState(false);
  // using react ref for detecting a click outside of region filter's dropdown menu
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setDropDownFilterStatus);
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
      <div className={styles.regionFilter} ref={wrapperRef}>
        <div
          className={darkMode ? `darkElements` : `lightElements`}
          onClick={() => setDropDownFilterStatus(!dropDownFilterStatus)}
        >
          <span>
            {/* show the remove button */}
            {regionFilter && (
              <button
                className={darkMode ? `darkElements` : `lightElements`}
                onClick={() => onRegionChange("")}
              >
                <i className="fas fa-times"></i>
              </button>
            )}
            {/* region filter's title */}
            {regionFilter
              ? regionFilter.charAt(0).toUpperCase() + regionFilter.slice(1)
              : "Filter by Region"}
          </span>
          <i
            className={`fas fa-arrow-left ${
              dropDownFilterStatus ? styles.arrow__Up : styles.arrow__Down
            }`}
          ></i>
        </div>
        {/* region filter's items' dropdown menu */}
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
