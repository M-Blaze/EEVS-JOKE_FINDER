import React, { useState, useRef } from "react";
import { searchJokes } from "../../../../../store/action";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Loader from "react-loader-spinner";

function SearchForm({ searchJokes, history }) {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
  const [isSearchingJokes, setIsSearchingJokes] = useState(false);
  const queryRef = useRef(null);

  function submitHandler(e) {
    e.preventDefault();
    if (query) {
      setIsSearchingJokes(true);
      searchJokes(query.trim())
        .then(() => {
          history.push("/jokes/random");
          setQuery("");
          setIsSearchingJokes(false);
          document.body.classList.remove("nav-active");
          queryRef.current.blur();
        })
        .catch(() => {
          setError(true);
          setQuery("");
          setIsSearchingJokes(false);
        });
    }
  }

  function changeHandler(e) {
    const { value } = e.target;
    setError(false);
    setQuery(value);
  }

  return (
    <div className="nav-search-bar">
      <form
        action="#"
        autoComplete="off"
        onSubmit={submitHandler}
        className="search-form"
      >
        <div className="input-group">
          <input
            type="search"
            name="query"
            ref={queryRef}
            onChange={changeHandler}
            placeholder={error ? "No jokes found..." : "Search for a joke..."}
            value={query}
            className={`${error ? "input-error" : ""}`}
          />
        </div>
        {isSearchingJokes ? (
          <Loader
            type="Oval"
            className="search-loader"
            color="#ffa500"
            height={25}
            width={25}
          />
        ) : (
          <div className="button-group">
            <button type="submit">
              <i className="icon-search"></i>
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default withRouter(connect(null, { searchJokes })(SearchForm));
