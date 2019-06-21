import React from "react";

class Comment extends React.Component {
  constructor() {
    super();
    this.state = this.props;
  }

  render() {
    return (
      <div>
        <h1>{this.state.username}:</h1>
        <h1>{this.state.content}</h1>
      </div>
    );
  }
}

export default Comment;
