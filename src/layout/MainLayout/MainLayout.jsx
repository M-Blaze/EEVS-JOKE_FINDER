import React, { Component } from "react";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import { getCategories } from "../../store/action";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import Loader from "react-loader-spinner";

class MainLayout extends Component {
  state = {
    isFetchingCategories: true
  };

  componentDidMount() {
    this.props.getCategories();
  }

  componentDidUpdate() {
    if (this.props.categories.length !== 0 && this.state.isFetchingCategories) {
      this.setState({
        isFetchingCategories: false
      });
    }
  }

  render() {
    return this.state.isFetchingCategories ? (
      <Loader
        type="MutatingDots"
        className="category-loader"
        color="#ffa500"
        height={100}
        width={100}
      />
    ) : (
      <div className="main-layout">
        <Route path="/jokes/:slug" component={Sidebar} />
        <div className="block-content">
          <Header />
          {this.props.children}
        </div>
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

export default withRouter(
  connect(mapStateToProps, { getCategories })(MainLayout)
);
