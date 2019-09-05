import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { newThread } from "../actions/threadActions";
import { getProfile } from "../actions/profileActions";
import TextAreaFieldGroup from "./TextAreaFieldGroup";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

class Thread extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      subcategory: this.props.match.params.subcategory
    };
  }

  componentDidMount() {
    this.props.getProfile(this.props.auth.user.name);
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    console.log(this.props);
    const profile = this.props.profile.profile;
    if (profile) {
      this.props.newThread(
        this.state.title,
        profile.username,
        this.state.content,
        this.state.subcategory
      );
      this.props.history.goBack();
    }
  };

  render() {
    return (
      <div style={{
        margin: "30px auto",
        padding: "15px"
      }}>
        <form onSubmit={this.onSubmit}>
          <div>
          <Typography component="h1" variant="h5" color="primary">Title:</Typography>
          </div>
          <div>
          <input
            type="text"
            name="title"
            value={this.props.title}
            onChange={this.onChange}
          />
          </div>
          <div style={{width: "200px"}}>
        <TextAreaFieldGroup
            name="content"
            value={this.props.content}
            onChange={this.onChange}
          />
          </div>
          <div>
          <Button type="submit" onClick={this.onSubmit} color="primary"> 
          Post
          </Button>
          </div>
        </form>
      </div>
    );
  }
}

Thread.propTypes = {
  auth: PropTypes.object.isRequired,
  newThread: PropTypes.func.isRequired,
  getProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  thread: state.thread,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { newThread, getProfile }
)(Thread);
