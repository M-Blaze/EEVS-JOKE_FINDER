import React, { useState } from "react";
import { searchJokes } from "../../../../../store/action";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

function SearchForm({ searchJokes, history }) {
  const [query, setQuery] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    if (query) {
      searchJokes(query.trim()).then(() => {
        history.push("/jokes/random");
      });
    }
  }

  function changeHandler(e) {
    const { value } = e.target;
    setQuery(value);
  }

  return (
    <div className="nav-search-bar">
      <form action="#" onSubmit={submitHandler} className="search-form">
        <div className="input-group">
          <input
            type="search"
            name="query"
            onChange={changeHandler}
            placeholder="Search for a joke..."
          />
        </div>
        <div className="button-group">
          <button type="submit">
            <i className="icon-search"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default withRouter(connect(null, { searchJokes })(SearchForm));
