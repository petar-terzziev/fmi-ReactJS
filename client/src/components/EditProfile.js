import React, { Component } from "react";
import PropTypes from "prop-types";
import UploadImageForm from "./uploadform";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { editprofil } from ".././actions/profileActions";
import TextAreaFieldGroup from "./TextAreaFieldGroup";

class EditProfile extends Component {
  constructor(props) {
    super(props);
    console.log("ok");
    this.state = {
      photo: null,
      descr: ""
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onsubmit = e => {
    console.log(this.props.auth.user);
    const profileData = new FormData();
    profileData.append("userid", this.props.auth.user.id);
    profileData.append("descr", this.state.descr);
    profileData.append("photo", e[0]);
    this.props.editprofil(
      profileData,
      this.props.auth.user.id,
      this.props.history
    );
  };
  render() {
    return (
      <div
        style={{
          width: "400px",
          margin: "30px auto",
          backgroundColor: "#F8F7FA",
          padding: "15px"
        }}
      >
        <UploadImageForm onDrop={this.onsubmit} />
        <TextAreaFieldGroup
          name="descr"
          value={this.state.descr}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

EditProfile.propTypes = {
  editprofil: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { editprofil }
)(withRouter(EditProfile));
