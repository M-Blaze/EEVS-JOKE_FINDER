import React from "react";
import Logo from "./components/Logo";
import SearchForm from "./components/SearchForm";

function Header() {
  return (
    <div id="header">
      <div className="container">
        <div className="header-content">
          <Logo />
          <SearchForm />
        </div>
      </div>
    </div>
  );
}

export default Header;
