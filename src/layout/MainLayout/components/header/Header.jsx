import React from "react";
import Logo from "./components/Logo";
import SearchForm from "./components/SearchForm";
import BurgerMenu from "./components/BurgerMenu";

function Header() {
  return (
    <div id="header" className="header">
      <div className="container">
        <div className="header-content">
          <Logo />
          <SearchForm />
          <BurgerMenu />
        </div>
      </div>
    </div>
  );
}

export default Header;
