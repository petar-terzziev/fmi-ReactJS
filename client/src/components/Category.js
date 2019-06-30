import React from "react";
import Subcategory from "./Subcategory";
import { connect } from "react-redux";
import { isRegistered } from "../isRegistered";
import { Link } from "react-router-dom";

class Category extends React.Component {
  constructor() {
    super();
    this.state = {
      subcategories: ["CPU", "GPU"]
    };
  }

  render() {
    const adminActions = (
      <button onClick={this.toggleTextbox}>New subcategory</button>
    );

    return (
      <div>
        <div>
          {this.state.subcategories.map((c, index) => (
            <div key={index}>
              <li>{c}:</li>
              <Subcategory />
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

export default connect(mapStateToProps)(Category);
