import React, { Component } from "react";
//const User = require("../Schemas/User");
//const mongoose = require("mongoose");

class Login extends Component {
  state = {
    username: "",
    password: "",
    status: "",
    loggedIn: false
  };

  handlePassword = e => {
    this.setState({ password: e.target.value });
  };

  handleUsername = e => {
    this.setState({ username: e.target.value });
  };

  handleClick = e => {
    e.preventDefault();
    fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(res => {
      if (res.status === 404)
        this.setState({ status: "Wrong username or password!" });
      else this.setState({ status: "You are now logged in!", loggedIn: true });
    });
  };
  render() {
    return (
      <form>
        <div>
          {" "}
          <label>Username: </label>
          <input name="username" onChange={this.handleUsername} />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            onChange={this.handlePassword}
          />
        </div>
        <button onClick={this.handleClick}>Login</button>
        <div>{this.state.status}</div>
      </form>
    );
  }
}

export default Login;
