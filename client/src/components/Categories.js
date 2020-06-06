import React from "react";
import Category from "./Category";
import PropTypes from "prop-types";
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

Categories.propTypes = {
  getCategories: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCategories }
)(Categories);
