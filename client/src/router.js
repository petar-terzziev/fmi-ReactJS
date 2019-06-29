import React from "react";
import ReactDOM from "react-dom";
//import Register from "./Components/Register";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Category from "./components/Category";
//import Login from "./Components/Login";
import Profile from "./components/Profile";

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={Header} />
    <Route path="/loogin" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/profile" component={Profile} />
    <Route exact path="/categories" component={Categories} />
    <Route path="/categories/:category" component={Category} />
  </BrowserRouter>,
  document.getElementById("root")
);
