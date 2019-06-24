import React, { Component } from "react";
//const User = require("../Schemas/User");
//const mongoose = require("mongoose");

class Login extends Component {
  state = {
    username: "",
    password: "",
    notFound: false
  };

  handlePassword = e => {
    this.setState({ password: e.target.value });
  };

  handleUsername = e => {
    this.setState({ username: e.target.value });
  };

  handleClick = e => {
    fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(res => {
      if (res.status === 404) this.setState({ notFound: true });
      else this.setState({ notFound: false });
    });
  };
  render() {
    return (
      <div>
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
        <div>{this.state.notFound ? "Wrong username or password!" : null}</div>
      </div>
    );
  }
}

export default Login;
