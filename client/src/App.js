import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";
import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
import SearchResults from "./components/SearchResults"
import Subcategory from "./components/Subcategory";
import Category from "./components/Category";
import Categories from "./components/Categories";
import Marketplace from "./components/Marketplace";
import AddProduct from "./components/AddProduct";
import Thread from "./components/Thread";
import newThread from "./components/newThread";
import jwt_decode from "jwt-decode";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import "./App.css";

import setAuthToken from "./setAuthToken";

// Check for token
if (localStorage.jwtToken && localStorage.jwtToken !== "undefined") {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "/";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
          <Navbar/>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile/:username" component={Profile} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/editprofile" component={EditProfile} />
          <Route exact path="/marketplace" component={Marketplace} />
          <Route exact path="/addproduct" component={AddProduct} />
          <Route exact path="/results/:in/:data" component={SearchResults} />

          
          <Route exact path="/categories/:category" component={Category} />
          <Route
            exact
            path="/categories/:category/:subcategory"
            component={Subcategory}
          />
          <Route exact path="/thread/:threadid" component={Thread} />
          <Route
            path="/categories/:category/:subcategory/new"
            component={newThread}
          />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
