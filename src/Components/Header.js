import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/profile">My profile</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
      </div>
    );
  }
}

export default Header;
