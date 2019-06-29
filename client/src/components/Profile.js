import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProfile } from "../actions/profileActions";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: ""
    };
  }
  componentWillMount() {
    this.props.getProfile(this.props.auth.user.id);
    const profile = this.props.profile.profile;
    if (profile) {
      this.setState({
        username: profile.username,
        email: profile.email
      });
    }
  }

  render() {
    return (
      <div>
        <h2>{this.state.username}</h2>
        <li>e-mail: {this.state.email}</li>
      </div>
    );
  }
}

Profile.propTypes = {
  getProfile: PropTypes.func.isRequired,
  profile: PropTypes.object,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getProfile }
)(Profile);
