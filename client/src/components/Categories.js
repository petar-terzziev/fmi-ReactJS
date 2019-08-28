import React from "react";
import Category from "./Category";
import { connect } from "react-redux";
import { getCategories } from "../actions/categoryActions";

class Categories extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Category name="Software" />
        </div>
        <div>
          <Category name="Hardware" />
        </div>
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
