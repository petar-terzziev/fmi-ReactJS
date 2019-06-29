import React from "react";
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

class SubmitForm extends React.Component {
  handleChange = event => {
    this.props.onChange(event.target.value);
  };
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input
          type="text"
          value={this.props.value}
          onChange={this.handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SubmitForm;
