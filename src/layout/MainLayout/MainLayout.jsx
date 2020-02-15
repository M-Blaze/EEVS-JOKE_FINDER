import React, { Component } from "react";
import Header from "../../views/header";
import Categories from "../../views/categories";
import { connect } from "react-redux";

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

const mapStateToProps = state => {
  const { categories } = state;
  return {
    categories
  };
};

export default connect(mapStateToProps)(MainLayout);
