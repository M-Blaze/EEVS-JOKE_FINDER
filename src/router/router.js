import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Categories from "../views/categories";
import Jokes from "../views/jokes";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route path="/jokes" component={Jokes} />
            <Route path="/" exact component={Categories} />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    );
  }
}

export default Router;
