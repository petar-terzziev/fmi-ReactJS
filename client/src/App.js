import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";
import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Category from "./components/Category";
import Categories from "./components/Categories";
import jwt_decode from "jwt-decode";
import { setCurrentUser } from "./actions/authActions";
import "./App.css";

//Login after refresh
const token = localStorage.getItem("jwtToken");
if (token) {
  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Navbar />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/categories" component={Categories} />
          <Route path="/categories/:category" component={Category} />
        </Router>
      </Provider>
    );
  }
}

export default App;
