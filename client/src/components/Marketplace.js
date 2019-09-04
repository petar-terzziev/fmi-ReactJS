import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {getproducts} from ".././actions/productActions"


import Container from '@material-ui/core/Container';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


class Marketplace extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      photo: "",
      descr: ""
    };
  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.profile.profile) {
      this.setState({
        username: nextProps.profile.profile.username,
        email: nextProps.profile.profile.email,
        photo: nextProps.profile.profile.photo,
        descr: nextProps.profile.profile.descr
      });
    }
  }

  render() {
    return (
      <div>
        <Container>
        <Grid>
        <Button>
        <Link to="/addproduct"> Add Product</Link>
        </Button>
        </Grid>
        </Container>
      </div>
    );
  }
}

Marketplace.propTypes = {
  profile: PropTypes.object,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
)(Marketplace);
