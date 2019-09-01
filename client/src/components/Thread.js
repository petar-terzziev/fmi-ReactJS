import React from "react";
import PropTypes from "prop-types";
import { isRegistered } from "../userType";
import { connect } from "react-redux";
import SubmitForm from "./SubmitForm";

class Thread extends React.Component {
  constructor() {
    super();
    this.state = {
      id: -1,
      comments: [],
      content: ""
    };
  }

  componentDidMount() {}

  getId() {
    const id = this.props.match.params.threadid;
    this.setState({ id });
  }

  onSubmit = event => {
    event.preventDefault();
    let comments = this.state.comments;
    comments.push(this.state.newComment);
    this.setState({ comments, newComment: "" });
  };

  handleChange = value => {
    this.setState({ newComment: value });
  };

  render() {
    const userActions = (
      <SubmitForm
        onSubmit={this.onSubmit}
        onChange={this.handleChange}
        value={this.state.newComment}
      />
    );
    return (
      <div>
        <h1>{this.state.id}</h1>
        {this.state.comments.map((comment, index) => (
          <div key={index}>{comment}</div>
        ))}
        {isRegistered(this.props.auth) ? userActions : null}
      </div>
    );
  }
}

Thread.propTypes = {
  auth: PropTypes.object.isRequired,
  thread: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  thread: state.thread
});

export default connect(mapStateToProps)(Thread);
