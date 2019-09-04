import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from ".././actions/authActions";
import { isRegistered } from "../userType";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      data: "",
      in: "marketplace"
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
  }
  onClick(e) {
    e.preventDefault();
    this.props.history.push(`/results/${this.state.in}/${this.state.data}`);
  }

  render() {
    const state_auth = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a
            href=""
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link"
          >
            Logout
          </a>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            to={`/profile/${this.props.auth.user.name}`}
          >
            My Profile
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/categories">
            Categories
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/marketplace">
            Marketplace
          </Link>
        </li>
        <li>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              name="data"
              value={this.state.data}
              onChange={this.onChange}
              placeholder="Search"
              aria-label="Search"
            />
            <select className="form-control" name="in" onChange={this.onChange}>
              <option value="marketplace">Marketplace</option>
              <option value="threads">Threads</option>
              <option value="profiles">Profiles</option>
            </select>
            <button
              className="btn btn-outline-primary my-2 my-sm-0"
              color="primary"
              onClick={this.onClick}
            >
              Search
            </button>
          </form>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/categories">
            Categories
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/marketplace">
            Marketplace
          </Link>
        </li>
        <li>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              name="data"
              value={this.state.data}
              onChange={this.onChange}
              placeholder="Search"
              aria-label="Search"
            />
            <select className="form-control" name="in" onChange={this.onChange}>
              <option value="marketplace">Marketplace</option>
              <option value="threads">Threads</option>
              <option value="profiles">Profiles</option>
            </select>
            <button
              className="btn btn-outline-primary my-2 my-sm-0"
              color="primary"
              onClick={this.onClick}
            >
              Search
            </button>
          </form>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-md  navbar-dark bg-dark">
        <i className="fas fa-cogs" />
        <Link className="navbar-brand" to="/">
          TechForum
        </Link>
        <div className="collapse navbar-collapse">
          {isRegistered(state_auth) ? authLinks : guestLinks}
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(withRouter(Navbar));
