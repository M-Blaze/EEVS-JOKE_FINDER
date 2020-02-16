import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

function Pagination({
  numberOfJokesPerPage,
  totalNumberOfJokes,
  setPageIndex,
  pageIndex,
  setCurrentJokes
}) {
  const [paginationIndices, setPaginationIndices] = useState("");

  useEffect(() => {
    const indecesValue = Math.ceil(totalNumberOfJokes / numberOfJokesPerPage);
    setPaginationIndices(indecesValue);
  }, [totalNumberOfJokes, numberOfJokesPerPage]);

  function paginationClickHandler(i) {
    setPageIndex(i);
    setCurrentJokes(i);
  }

  if (totalNumberOfJokes > numberOfJokesPerPage) {
    const paginationItems = [];
    for (let i = 1; i <= paginationIndices; i++) {
      paginationItems.push(
        <li
          key={i}
          onClick={() => paginationClickHandler(i)}
          className="pagination-items"
        >
          <div
            className={`pagination-content ${pageIndex === i ? "active" : ""}`}
          >
            {i}
          </div>
        </li>
      );
    }
    return (
      <div className="pagination">
        <ul className="pagination-list">{paginationItems}</ul>
      </div>
    );
  }
  return false;
}

export default connect(null)(Pagination);
