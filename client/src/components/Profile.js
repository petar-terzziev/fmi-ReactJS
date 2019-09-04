import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProfile } from "../actions/profileActions";
import Container from '@material-ui/core/Container';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


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

  componentWillMount() {
    this.props.getProfile(this.props.match.params.username);
  }

  componentWillReceiveProps(nextProps) {
    
    if (nextProps.profile.profile) {
      console.log(nextProps.profile.profile);
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
        <Container>
        <Grid>
        <h2>Hi, {this.state.username}</h2>
        {this.state.photo && (
          <img
            src={`http://localhost:8000/${this.state.photo}`}
            alt="userphoto"
            style={{ height: 80,width: 80 }}
          />
        )}
        <li>e-mail: {this.state.email}</li>
        <p>About me: {this.state.descr}</p>
        { this.props.match.params.username===this.props.auth.user.name &&(
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
