import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    );
  }
}

export default Router;
