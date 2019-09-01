import React from "react";
import { Link } from "react-router-dom";
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
    this.retrieveSubcategories(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.subcategories.subcategories) {
      this.retrieveSubcategories(nextProps);
    }
  }

  retrieveSubcategories(props) {
    let subcategories = props.subcategories.subcategories
      .filter(c => c.category === this.props.name)
      .map(c => c.name);
    this.setState({ subcategories: subcategories });
  }

  newSubcategory = () => {
    this.setState({ newSubcat: !this.state.newSubcat });
  };

  handleForm = title => {
    this.props.newSubcategory(title, this.props.name);
    this.setState({ newSubcat: !this.state.newSubcat });
    this.props.getSubcategories(this.props.name);
    this.retrieveSubcategories(this.props);
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
            <h2 key={index}>
              <Link to={`/categories/${this.props.name}/${c}`}>{c}</Link>
            </h2>
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
