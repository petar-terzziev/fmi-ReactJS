import React, { Component } from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";

import { connect } from "react-redux";
import { loginUser } from ".././actions/authActions";
//const User = require("../Schemas/User");
//const mongoose = require("mongoose");

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

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
    console.log(this.state.auth);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { classes } = this.props;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}  style={{
            margin: "30px auto",
            padding: "15px"
          }}>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <Grid>
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
                className={classes.submit}
                onClick={this.onSubmit}
              >
                Sign In
              </Button>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

Login = withStyles(styles)(Login);

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
