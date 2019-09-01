import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { isRegistered } from "../userType";
import { connect } from "react-redux";
import { getThread, newComment, getComments } from "../actions/threadActions";

class Thread extends React.Component {
  constructor() {
    super();
    this.state = {
      newComment: false,
      newCommentValue: ""
    };
  }

  componentWillMount() {
    const id = this.props.match.params.threadid;
    this.props.getThread(id);
    this.props.getComments(id);
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
    if (nextProps.thread.thread) {
      //const { title, content } = nextProps.thread;
    }
  }

  onSubmit = event => {
    event.preventDefault();
    const thread_id = this.props.match.params.threadid;
    const author_id = this.props.auth.user.id;
    this.props.newComment(author_id, thread_id, this.state.newCommentValue);
    this.toggleReply();
    this.props.getComments(thread_id);
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

    console.log(this.props.thread.comments);

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
          <h1>{this.props.thread.title}</h1>
          <p>{this.props.thread.content}</p>
        </div>
        {this.props.thread.comments.map((comment, index) => (
          <div key={index}>
            {comment.content} by{" "}
            <Link to={`/profile/${comment.author}`}>{comment.author}</Link>
          </div>
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
  { getThread, newComment, getComments }
)(Thread);
