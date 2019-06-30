import React from "react";
import Category from "./Category";
import Subcategory from "./Subcategory";
import { connect } from "react-redux";
import { isRegistered } from "../isRegistered";
import { getCategories } from "../actions/categoryActions";
import { Link } from "react-router-dom";

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: ["Software", "Hardware"]
    };
  }

  componentWillMount() {
    this.props.getCategories();
  }

  render() {
    const adminActions = (
      <button onClick={this.toggleTextbox}>New category</button>
    );

    return (
      <div>
        <div>
          {this.state.categories.map((c, index) => (
            <div key={index}>
              <li>{c}:</li>
              <Category name={c} />
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

export default connect(
  mapStateToProps,
  { getCategories }
)(Categories);
