import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { isRegistered } from "../isRegistered";
import Thread from "./Thread";

class Subcategory extends React.Component {
  constructor() {
    super();
    this.state = {
      threads: [
        { title: "thread1", user: "user1", id: 0 },
        { title: "thread2", user: "user2", id: 1 }
      ]
    };
  }

  //TODO: fetchThreads from db
  toggleTextbox = event => {
    console.log(event);
  };

  render() {
    const adminActions = (
      <button onClick={this.toggleTextbox}>New thread</button>
    );

    return (
      <div>
        <h2>{this.props.name}</h2>
        <div>
          {this.state.threads.map((thread, index) => (
            <div>
              <div>
                <Link to={`/threads/${thread.id}`}>{thread.title}</Link>:
                <Link to={`/profile/${thread.user}`}>{thread.user}</Link>
              </div>
            </div>
          ))}
        </div>
        <div>{isRegistered(this.props.auth) ? adminActions : null}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Subcategory);
