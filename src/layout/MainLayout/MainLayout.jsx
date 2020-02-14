import React, { Component } from "react";
import Header from "../../views/header";
import Categories from "../../views/categories";

class MainLayout extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Categories />
      </div>
    );
  }
}
export default MainLayout;
