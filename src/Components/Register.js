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
    e.preventDefault();
    fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(json => console.log(JSON.stringify(json)));
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
      </form>
    );
  }
}

export default Register;
