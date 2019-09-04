import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProfile } from "../actions/profileActions";
import Container from "@material-ui/core/Container";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

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
    this.props.getProfile(this.props.match.params.username);
    this.setState(this.props.profile.profile);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.profile !== this.props.profile);
    if (
      this.props.profile.profile &&
      nextProps.profile.profile.username !== this.props.profile.profile.username
    ) {
      this.props.getProfile(this.props.match.params.username);
    }
    this.setState(nextProps.profile.profile);
  }

  render() {
    const isMyProfile =
      this.props.match.params.username === this.props.auth.user.name;

    return (
      <div>
        <Container>
          <Grid>
            <h2>
              {isMyProfile && <span>Hi, </span>}
              {this.state.username}
            </h2>
            {this.state.photo && (
              <img
                src={`http://localhost:8000/${this.state.photo}`}
                alt="userphoto"
                style={{ height: 80, width: 80 }}
              />
            )}
            <li>e-mail: {this.state.email}</li>
            <p>About me: {this.state.descr}</p>
            {isMyProfile && (
              <Button>
                <Link to="/editprofile"> Edit Profile</Link>
              </Button>
            )}
          </Grid>
        </Container>
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
