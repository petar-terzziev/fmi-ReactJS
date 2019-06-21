import React from "react";
import ReactDOM from "react-dom";
import Register from "./Components/Register";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Components/Header";
import Categories from "./Components/Categories";
import Category from "./Components/Category";

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={Header} />
    <Route path="/register" component={Register} />
    <Route exact path="/categories" component={Categories} />
    <Route path="/categories/:category" component={Category} />
  </BrowserRouter>,
  document.getElementById("root")
);
