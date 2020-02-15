import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div id="header">
      <div className="header-content">
        <div className="logo">
          <Link to="/">
            <img src="../assets/images/logo.png" alt="chuck norris" />
          </Link>
        </div>
        <div className="nav-search-bar">
          <form action="#">
            <div className="input-group">
              <input type="text" placeholder="Search for a joke..." />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Header;
