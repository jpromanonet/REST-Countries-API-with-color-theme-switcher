import React from "react";
import styles from "./Pagination.module.scss";

//declare constant for determining the current situation for setCurrentPage function
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
//setCurrentPage based on user interactions
const onSetCurrentPage = (
  setCurrentPage,
  currentPage,
  pageNumberChangingStatus
) => {
  switch (pageNumberChangingStatus) {
    case INCREMENT: {
      setCurrentPage(currentPage + 1);
      break;
    }
    case DECREMENT: {
      setCurrentPage(currentPage - 1);
      break;
    }
    default:
      break;
  }
};
//create pagination for the first and last page
const firstAndLastPagesPagination = (
  currentPage,
  totalPages,
  setCurrentPage
) => {
  return (
    <React.Fragment>
      <button
        onClick={
          currentPage + 1 === totalPages ? () => setCurrentPage(0) : undefined
        }
        className={currentPage === 0 ? styles.isActive : undefined}
      >
        1
      </button>
      <button>
        <i className="fas fa-ellipsis-h"></i>
      </button>
      <button
        onClick={
          currentPage + 1 === 1
            ? () => setCurrentPage(totalPages - 1)
            : undefined
        }
        className={currentPage + 1 === totalPages ? styles.isActive : undefined}
      >
        {totalPages}
      </button>
    </React.Fragment>
  );
};
//create pagination for 2nd and n-1st page
const paginationForSecondAndOneBeforeLastPage = (
  currentPage,
  totalPages,
  setCurrentPage
) => {
  return (
    <React.Fragment>
      <button onClick={() => setCurrentPage(0)}>1</button>
      {currentPage + 1 === 2 ? (
        <React.Fragment>
          <button className={styles.isActive}>2</button>
          <button>
            <i className="fas fa-ellipsis-h"></i>
          </button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <button>
            <i className="fas fa-ellipsis-h"></i>
          </button>
          <button className={styles.isActive}>{totalPages - 1}</button>
        </React.Fragment>
      )}
      <button onClick={() => setCurrentPage(totalPages - 1)}>
        {totalPages}
      </button>
    </React.Fragment>
  );
};
//create pagination buttons based on the page's state
const paginationMiddleSectionCreator = (
  currentPage,
  totalPages,
  setCurrentPage
) => {
  if (totalPages === 1) {
    return <button>1</button>;
  }
  switch (currentPage + 1) {
    //create pagination for 1st and last page
    case 1:
    case totalPages: {
      return firstAndLastPagesPagination(
        currentPage,
        totalPages,
        setCurrentPage
      );
    }
    // create pagination for 2nd and n-1st page
    case 2:
    case totalPages - 1: {
      return paginationForSecondAndOneBeforeLastPage(
        currentPage,
        totalPages,
        setCurrentPage
      );
    }
    //create pagination for the middle ones
    default: {
      return (
        <React.Fragment>
          <button onClick={() => setCurrentPage(0)}>1</button>
          <button>
            <i className="fas fa-ellipsis-h"></i>
          </button>
          <button className={styles.isActive}>{currentPage + 1}</button>
          <button>
            <i className="fas fa-ellipsis-h"></i>
          </button>
          <button onClick={() => setCurrentPage(totalPages - 1)}>
            {totalPages}
          </button>
        </React.Fragment>
      );
    }
  }
};
const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  return (
    <div className={styles.pagination}>
      <p>Current Page:{currentPage + 1}</p>
      <p>Total Pages : {totalPages}</p>
      {/* disable next and previous page button whenever there is only 1 page available */}
      <button
        className="leftPage"
        onClick={() => onSetCurrentPage(setCurrentPage, currentPage, DECREMENT)}
        disabled={currentPage === 0}
      >
        <i className="fas fa-arrow-left"></i>
      </button>
      {paginationMiddleSectionCreator(currentPage, totalPages, setCurrentPage)}
      <button
        className={styles.nextPage}
        onClick={() => onSetCurrentPage(setCurrentPage, currentPage, INCREMENT)}
        disabled={currentPage + 1 === totalPages}
      >
        <i className="fas fa-arrow-left"></i>
      </button>
    </div>
  );
};

export default Pagination;
