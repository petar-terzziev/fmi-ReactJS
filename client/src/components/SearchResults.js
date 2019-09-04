import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { search } from "../actions/searchActions";
import { Link } from "react-router-dom";

export class SearchResults extends Component {
  constructor() {
    super();
    this.state = {
      threads: [],
      products: [],
      profiles: []
    };
  }
  componentDidMount() {
    this.props.search({
      type: this.props.match.params.in,
      value: this.props.match.params.data
    });
    this.setState({
      threads: this.props.searchResults.threads,
      products: this.props.searchResults.products,
      profiles: this.props.searchResults.profiles
    });
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.match.params.in !== nextProps.match.params.in ||
      this.props.match.params.data !== nextProps.match.params.data
    ) {
      this.props.search({
        type: nextProps.match.params.in,
        value: nextProps.match.params.data
      });
    }
    this.setState({
      threads: nextProps.searchResults.threads,
      products: nextProps.searchResults.products,
      profiles: nextProps.searchResults.profiles
    });
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <div>
          {this.state.threads.map((t, index) => (
            <li key={index}>
              <Link to={`/thread/${t.id}`}>{t.title}</Link>
            </li>
          ))}
        </div>
        <div>
          {this.state.profiles.map((u, index) => (
            <li key={index}>
              <Link to={`/profile/${u.username}`}>{u.username}</Link>
            </li>
          ))}
        </div>
        <div>
          {this.state.products.map((p, index) => (
            <li key={index}>
              <Link to={`/products/${p.name}`}>{p.name}</Link>
            </li>
          ))}
        </div>
      </div>
    );
  }
}

SearchResults.propTypes = {
  search: PropTypes.func.isRequired,
  auth: PropTypes.object,
  searchResults: PropTypes.object
};

const mapStateToProps = state => ({
  auth: state.auth,
  searchResults: state.searchResults
});

export default connect(
  mapStateToProps,
  { search }
)(SearchResults);
