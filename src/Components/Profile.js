import React from "react";

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      error: ""
    };
  }
  componentWillMount() {
    fetch("/api/login")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.hasOwnProperty("error")) {
          this.setState({ error: data.error });
        } else {
          console.log(data);
          this.setState({ username: data.username, email: data.email });
        }
      });
  }
  render() {
    return (
      <div>
        <div>Your username: {this.state.username}</div>
        <div>Your email: {this.state.email}</div>
      </div>
    );
  }
}

export default Profile;
