import React, { Component } from "react";
//const User = require("../Schemas/User");
//const mongoose = require("mongoose");

class Register extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  };

  handleEmail = e => {
    this.setState({ email: e.target.value });
  };

  handlePassword = e => {
    this.setState({ password: e.target.value });
  };

  handleUsername = e => {
    this.setState({ username: e.target.value });
  };

  handleClick = e => {
    fetch("/users", { method: "POST" })
      .then(res => res.json())
      .then(json => {});
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
          <label>Email: </label>
          <input name="email" onChange={this.handleEmail} />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            onChange={this.handlePassword}
          />
        </div>
        <button onClick={this.handleClick}>Register</button>
      </div>
    );
  }
}

export default Register;
