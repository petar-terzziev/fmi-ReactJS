import React from "react";
import PropTypes from "prop-types";
import { isRegistered } from "../userType";
import { connect } from "react-redux";
import { getThread } from "../actions/threadActions";

class Thread extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      comments: [],
      content: "",
      newComment: false,
      newCommentValue: ""
    };
  }

  componentWillMount() {
    const id = this.props.match.params.threadid;
    this.props.getThread(id);
    const { title, content } = this.props.thread.thread;
    this.setState({ title, content });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.thread.thread) {
      const { title, content } = nextProps.thread.thread;
      this.setState({ title, content });
    }
  }

  onSubmit = event => {
    event.preventDefault();
    let comments = this.state.comments;
    comments.push(this.state.newCommentValue);
    this.setState({ comments, newCommentValue: "" });
    this.toggleReply();
  };

  toggleReply = value => {
    this.setState({ newComment: !this.state.newComment });
  };

  onChange = event => {
    this.setState({ newCommentValue: event.target.value });
  };

  render() {
    const userActions = (
      <div>
        <button onClick={this.toggleReply}>Reply</button>
      </div>
    );

    const textArea = (
      <form onSubmit={this.onSubmit}>
        <textarea
          type="text"
          name="content"
          value={this.state.newCommentValue}
          onChange={this.onChange}
        />
        <input type="submit" value="Submit" />
      </form>
    );
    return (
      <div>
        <div>
          <h1>{this.state.title}</h1>
          <p>{this.state.content}</p>
        </div>
        {this.state.comments.map((comment, index) => (
          <div key={index}>{comment}</div>
        ))}
        {isRegistered(this.props.auth) ? userActions : null}
        {this.state.newComment ? textArea : null}
      </div>
    );
  }
}

Thread.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  thread: state.thread
});

export default connect(
  mapStateToProps,
  { getThread }
)(Thread);
