import React from "react";
import Subcategory from "./Subcategory";
import SubmitForm from "./SubmitForm";
import { connect } from "react-redux";
import { isAdmin } from "../userType";
import { newSubcategory, getSubcategories } from "../actions/categoryActions";

class Category extends React.Component {
  constructor() {
    super();
    this.state = {
      subcategories: [],
      newSubcat: false
    };
  }

  componentWillMount() {
    this.props.getSubcategories(this.props.name);
  }

  newSubcategory = () => {
    this.setState({ newSubcat: !this.state.newSubcat });
  };

  handleForm = title => {
    this.props.newSubcategory(title, this.props.name);
    this.setState({ newSubcat: !this.state.newSubcat });
  };

  render() {
    const adminActions = (
      <div>
        <button onClick={this.newSubcategory}>New subcategory</button>
      </div>
    );

    return (
      <div>
        <h1>{this.props.name}</h1>
        <div>
          {this.state.subcategories.map((c, index) => (
            <div key={index}>
              <Subcategory name={c} />
            </div>
          ))}
        </div>
        <div>{isAdmin(this.props.auth) ? adminActions : null}</div>
        <div>
          {this.state.newSubcat ? (
            <SubmitForm onSubmit={this.handleForm} />
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  subcategories: state.subcategories,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { newSubcategory, getSubcategories }
)(Category);
