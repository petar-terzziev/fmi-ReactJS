import React from "react";
import SubmitForm from "./SubmitForm";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { isRegistered } from "../userType";
import { getProfile } from "../actions/profileActions";
import { addSubcategory } from "../actions/categoryActions";
import { getThreads, newThread } from "../actions/threadActions";

class Subcategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.match.params.subcategory,
      threads: [],
      newThread: false
    };
  }

  componentDidMount() {
    console.log("in Subcategory");
    this.props.getProfile(this.props.auth.user.id);
    this.props.getThreads(this.props.name);
    this.retrieveThreads(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.threads.threads) {
      this.retrieveThreads(nextProps);
    }
  }

  retrieveThreads(props) {
    const data = props.threads.threads.filter(
      t => t.subcategory === this.state.title
    );
    this.setState({ threads: data });
  }

  newThread = event => {
    this.setState({ newThread: !this.state.newThread });
  };

  handleForm = title => {
    console.log(title);
    this.props.getProfile(this.props.auth.user.id);
    const profile = this.props.profile.profile;
    if (profile) {
      this.props.newThread(title, profile.username, this.state.title);
      this.newThread();
      this.props.getThreads(this.props.name);
      this.retrieveThreads(this.props);
    }
  };

  render() {
    const userActions = (
      <div>
        <button onClick={this.newThread}>New thread</button>
      </div>
    );

    return (
      <div>
        <h1>{this.state.title}</h1>
        <div>
          {this.state.threads.map((thread, index) => (
            <div key={index}>
              <div>
                <Link to={`/thread/${thread.id}`}>{thread.title}</Link>
                {" by "}
                <Link to={`/profile/${thread.author}`}>{thread.author}</Link>
              </div>
            </div>
          ))}
        </div>
        <div>{isRegistered(this.props.auth) ? userActions : null}</div>
        <div>
          {this.state.newThread ? (
            <div>
              <SubmitForm onSubmit={this.handleForm} />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
  threads: state.threads
});

export default connect(
  mapStateToProps,
  { getProfile, addSubcategory, getThreads, newThread }
)(Subcategory);
