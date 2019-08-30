import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from ".././actions/authActions";
//const User = require("../Schemas/User");
//const mongoose = require("mongoose");

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const userData = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.loginUser(userData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">Sign in to your account</p>
              <div className=" text-center">
                <div className="col col-sm-6 col-md-8 col-lg-4 col-xl-3">
                  <form className="form-inline justify-content-center">
                    <div>
                      {" "}
                      <label>Username: </label>
                      <input
                        name="username"
                        value={this.state.username}
                        onChange={this.onChange}
                        className="form-control"
                      />
                    </div>
                    <div>
                      <label>Password: </label>
                      <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        className="form-control"
                      />
                    </div>
                    <button
                      onClick={this.onSubmit}
                      className="justify-content-center"
                    >
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
