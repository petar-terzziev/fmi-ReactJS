import React from "react";
import SubmitForm from "./SubmitForm";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { isRegistered } from "../userType";
import { getProfile } from "../actions/profileActions";
import { addSubcategory } from "../actions/categoryActions";

class Subcategory extends React.Component {
  constructor() {
    super();
    this.state = {
      threads: [],
      newThread: false,
      currUser: ""
    };
  }

  //first time getting profile returns null :hmm:
  componentDidMount() {
    this.props.getProfile(this.props.auth.user.id);
  }
  newThread = event => {
    this.setState({ newThread: !this.state.newThread });
  };

  handleForm = title => {
    this.props.getProfile(this.props.auth.user.id);
    const profile = this.props.profile.profile;
    console.log(profile);
    if (profile) {
      let { threads } = this.state;
      threads.push({
        id: this.state.threads.length + 1,
        title,
        author: profile.username
      });
      this.setState({ threads });
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
        <h2>{this.props.name}</h2>
        <div>
          {this.state.threads.map((thread, index) => (
            <div key={index}>
              <div>
                <Link to={`/threads/${thread.id}`}>{thread.title}</Link>
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
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getProfile, addSubcategory }
)(Subcategory);
