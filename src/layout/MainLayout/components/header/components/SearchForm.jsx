import React, { useState } from "react";
import { searchJokes } from "../../../../../store/action";
import { connect } from "react-redux";

function SearchForm({ searchJokes }) {
  const [query, setQuery] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    if (query) {
      searchJokes(query.trim());
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
            type="text"
            name="query"
            onChange={changeHandler}
            placeholder="Search for a joke..."
          />
        </div>
        <div className="button-group">
          <i className="icon-search"></i>
        </div>
      </form>
    </div>
  );
}

export default connect(null, { searchJokes })(SearchForm);
