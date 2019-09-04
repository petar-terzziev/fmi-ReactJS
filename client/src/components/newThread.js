import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { newThread } from "../actions/threadActions";
import { getProfile } from "../actions/profileActions";

import TextField from "@material-ui/core/TextField";
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
      <div>
        <form onSubmit={this.onSubmit}>
          <h2>Title:</h2>
          <input
            type="text"
            name="title"
            value={this.props.title}
            onChange={this.onChange}
          />
          <TextField
            id="filled-multiline-flexible"
            label="Multiline"
            multiline
            rowsMax="4"
            value={this.props.content}
            onChange={this.onChange}
            margin="normal"
            helperText="hello"
            variant="filled"
          />
          <input type="submit" value="Submit" />
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
