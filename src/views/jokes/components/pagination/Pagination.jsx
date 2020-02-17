import React, { useState, useEffect } from "react";

function Pagination({
  numberOfJokesPerPage,
  totalNumberOfJokes,
  setPageIndex,
  pageIndex,
  setCurrentJokes
}) {
  const numberOfPaginationVisible = 5;
  const [paginationPosition, setPaginationPosition] = useState(1);
  const [multiPaginationAmount, setMultiPaginationAmount] = useState(1);

  useEffect(() => {
    const indecesValue = Math.ceil(totalNumberOfJokes / numberOfJokesPerPage);
    if (indecesValue > numberOfPaginationVisible) {
      const paginationAmount = Math.ceil(
        indecesValue / numberOfPaginationVisible
      );
      setMultiPaginationAmount(paginationAmount);
      return;
    }
    setMultiPaginationAmount(1);
    setPaginationPosition(1);
  }, [totalNumberOfJokes, numberOfJokesPerPage]);

  function paginationClickHandler(i) {
    setPageIndex(i);
    setCurrentJokes(i);
  }

  function paginationToggleHandler(paginationIndex, jokeIndex) {
    setPaginationPosition(paginationIndex);
    setPageIndex(jokeIndex);
    setCurrentJokes(jokeIndex);
  }

  if (totalNumberOfJokes > numberOfJokesPerPage) {
    const paginationItems = [];

    let loopEnd;
    const loopStart =
      paginationPosition === 1
        ? 1
        : 1 + numberOfPaginationVisible * (paginationPosition - 1);

    if (paginationPosition === 1) {
      if (totalNumberOfJokes <= numberOfPaginationVisible) {
        loopEnd = totalNumberOfJokes + 1;
      } else {
        loopEnd = numberOfPaginationVisible + 1;
      }
    } else {
      if (paginationPosition === multiPaginationAmount) {
        loopEnd =
          loopStart +
          (Math.ceil(totalNumberOfJokes / numberOfJokesPerPage) %
            numberOfPaginationVisible);
      } else {
        loopEnd = loopStart + numberOfPaginationVisible;
      }
    }

    for (let i = loopStart; i < loopEnd; i++) {
      paginationItems.push(
        <li key={i} className="pagination-items">
          <div
            onClick={() => paginationClickHandler(i)}
            className={`pagination-content ${pageIndex === i ? "active" : ""}`}
          >
            {i}
          </div>
        </li>
      );
    }

    if (multiPaginationAmount > 1) {
      if (paginationPosition < multiPaginationAmount) {
        const nextButton = (
          <li key="next" className="pagination-items">
            <div
              onClick={() => {
                paginationToggleHandler(paginationPosition + 1, loopEnd);
              }}
              className="pagination-content"
            >
              <div className="icon-holder">
                <i className="icon-forward"></i>
              </div>
            </div>
          </li>
        );
        paginationItems.push(nextButton);
      }

      if (paginationPosition > 1) {
        const prevButton = (
          <li key="prev" className="pagination-items">
            <div
              onClick={() => {
                paginationToggleHandler(paginationPosition - 1, loopStart - 1);
              }}
              className="pagination-content"
            >
              <div className="icon-holder">
                <i className="icon-backward"></i>
              </div>
            </div>
          </li>
        );
        paginationItems.unshift(prevButton);
      }
    }

    return (
      <div className="pagination">
        <ul className="pagination-list">{paginationItems}</ul>
      </div>
    );
  }

  return false;
}

export default Pagination;
