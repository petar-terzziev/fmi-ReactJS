import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProducts } from ".././actions/productActions";

import Container from "@material-ui/core/Container";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";

class Marketplace extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      photo: "",
      descr: "",
      products: []
    };
  }

  componentDidMount() {
    this.props.getProducts();
    this.setState({ products: this.props.products.products });
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
    this.setState({
      products: nextProps.products.products
    });
  }

  render() {
      const {classes} = this.props;
    return (
      <div>
        <Container>
          <Grid container>
            <Button>
              <Link to="/addproduct"> Add Product</Link>
            </Button>
          </Grid>
          <Grid>
        <div>
            
          {this.state.products.map(p => (
              <div>
            <Grid item>
              <Typography component="h1" variant="h5">
              {p.name}
            </Typography>
            </Grid>
            <Grid item>
            <img src ={`http://localhost:8000/${p.photo}`} alt = "product" style ={{ height: 120, width: 120 }}/>
            </Grid>
            <Grid item>
              <Typography component="p" variant="body2">
              {p.price} lv.
            </Typography>
            </Grid>
            <Grid item>
            <Typography component="p" variant="body2">
              {p.descr}
            </Typography>
            </Grid>
            </div>
          ))}
        </div>
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
  auth: state.auth,
  products: state.products
});

export default connect(
  mapStateToProps,
  { getProducts }
)(Marketplace);
