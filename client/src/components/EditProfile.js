import React, { Component } from "react";
import PropTypes from "prop-types";
import DropZone from "react-dropzone";
import ImagePreview from "./ImagePreview";
import Placeholder from "./placeholder";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { editprofil } from ".././actions/profileActions";
import TextAreaFieldGroup from "./TextAreaFieldGroup";

class EditProfile extends Component {
  constructor(props) {
    super(props);
    console.log("ok");
    this.state = {
      photo: [],
      descr: ""
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onDrop = newImageFile => this.setState({ photo: newImageFile });

  onsubmit = e => {
    e.preventDefault();
    const profileData = new FormData();
    profileData.append("userid", this.props.auth.user.id);
    profileData.append("descr", this.state.descr);
    profileData.append("photo", this.state.photo[0]);
    this.props.editprofil(
      profileData,
      this.props.auth.user.name,
      this.props.history
    );
  };
  render() {
    return (
      <form>
        <div
          style={{
            width: "400px",
            margin: "30px auto",
            backgroundColor: "#F8F7FA",
            padding: "15px"
          }}
        >
          <DropZone
            accept="image/jpeg, image/png, image/gif, image/bmp"
            className="upload-container"
            onDrop={this.onDrop}
            onChange={file => this.OnDrop(file)}
          >
            {({ getRootProps, getInputProps }) =>
              this.state.photo && this.state.photo.length > 0 ? (
                <ImagePreview
                  name="imagepreview"
                  imagefile={this.state.photo}
                />
              ) : (
                <Placeholder
                  error={"nononon"}
                  touched={false}
                  getInputProps={getInputProps}
                  getRootProps={getRootProps}
                />
              )
            }
          </DropZone>
          <TextAreaFieldGroup
            name="descr"
            value={this.state.descr}
            onChange={this.onChange}
          />
          <button
            type="button"
            className="uk-button uk-button-primary uk-button-large"
            onClick={this.onsubmit}
          >
            Submit
          </button>
          <button
            type="button"
            className="uk-button uk-button-default uk-button-large"
            style={{ float: "right" }}
            
          >
            Clear
          </button>
        </div>
      </form>
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
