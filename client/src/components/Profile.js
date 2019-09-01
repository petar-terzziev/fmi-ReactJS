import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProfile } from "../actions/profileActions";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      photo: "",
      descr: ""
    };
  }

  componentDidMount() {
    console.log(this.props.auth.user.id);
    this.props.getProfile(this.props.auth.user.id);
    const profile = this.props.profile.profile;
    if (profile) {
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.profile.profile) {
      this.setState({
        username: nextProps.profile.profile.username,
        email: nextProps.profile.profile.email,
        photo: nextProps.profile.profile.photo,
        descr: nextProps.profile.profile.descr
      });
    }
  }

  render() {
    return (
      <div>
        <h2>Hi, {this.state.username}</h2>
        {this.state.photo && (
          <img
            src={`http://localhost:8000/${this.state.photo}`}
            alt="userphoto"
            height="40"
            width="40"
            style={{ width: 40 }}
          />
        )}
        <li>e-mail: {this.state.email}</li>
        <p>About me: {this.state.descr}</p>
        <Link to="/editprofile"> Edit Profile</Link>
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
