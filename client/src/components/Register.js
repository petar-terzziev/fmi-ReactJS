import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '.././actions/authActions';
//const User = require("../Schemas/User");
//const mongoose = require("mongoose");

class Register extends Component {
  constructor(){
  super();
  this.state = {
    username: "",
    email: "",
    password: ""
  };
  this.onChange = this.onChange.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e){
    e.preventDefault();
    const newUser = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }

    this.props.registerUser(newUser,this.props.history);
  }
  render() {
    return (
      <form>
        <div>
          {" "}
          <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
          <label>Username: </label>
          <input name="username" value={this.state.username} onChange={this.onChange} />
        </div>
        <div>
          <label>Email: </label>
          <input name="email" value={this.state.email} onChange={this.onChange} />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
          />
            </div>
          </div>
        </div>
      </div>
        </div>
        <button onClick={this.onSubmit}>Register</button>
      </form>
        
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};


const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
