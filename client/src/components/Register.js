import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from ".././actions/authActions";
import { withStyles } from "@material-ui/core/styles";

import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

//const User = require("../Schemas/User");
//const mongoose = require("mongoose");

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };

    this.props.registerUser(newUser, this.props.history);
  }
  render() {
    const { classes } = this.props;
    console.log(classes);
    return (
      <div className={classes.root}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}  style={{
            margin: "30px auto",
            padding: "15px"
          }}>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                value={this.state.username}
                onChange={this.onChange}
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={this.state.email}
                onChange={this.onChange}
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={this.state.password}
                onChange={this.onChange}
                autoComplete="current-password"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={this.onSubmit}
                className={classes.submit}
              >
                Sign Up
              </Button>
              <Grid container></Grid>
            </form>
          </div>
        </Container>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

Register = withStyles(styles)(Register);
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
