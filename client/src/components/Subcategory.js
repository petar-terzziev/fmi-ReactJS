import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { isRegistered } from "../userType";
import { getProfile } from "../actions/profileActions";
import { addSubcategory } from "../actions/categoryActions";
import { getThreads, newThread } from "../actions/threadActions";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import CssBaseline from "@material-ui/core/CssBaseline";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class Subcategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.match.params.subcategory,
      threads: [],
      newThread: false
    };
  }

  componentWillMount() {
    this.props.getProfile(this.props.auth.user.id);
    this.props.getThreads(this.props.name);
    this.retrieveThreads(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.threads.threads) {
      this.retrieveThreads(nextProps);
    }
  }

  retrieveThreads(props) {
    const data = props.threads.threads.filter(
      t => t.subcategory === this.state.title
    );
    this.setState({ threads: data });
  }

  newThread = event => {
    this.setState({ newThread: !this.state.newThread });
    this.props.history.push(this.props.location.pathname + "/new");
  };

  handleForm = title => {
    console.log(title);
    this.props.getProfile(this.props.auth.user.id);
    const profile = this.props.profile.profile;
    if (profile) {
      this.props.newThread(title, profile.username, this.state.title);
      this.newThread();
      this.props.getThreads(this.props.name);
      this.retrieveThreads(this.props);
    }
  };

  loadthread = () => {
    console.log("yeye");
  };

  render() {
    const userActions = (
      <div>
        <Button variant="contained" color="primary" onClick={this.newThread}>
          New thread
        </Button>
      </div>
    );
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Container component="main">
          <CssBaseline />
          <Grid item container lg={12}>
            <div className={classes.paper}>
              <Typography
                component="h1"
                variant="h5"
                color="primary"
                className={classes.title}
              >
                {this.state.title}
              </Typography>

              <Divider />
              <List>
                {this.state.threads &&
                  this.state.threads.map((thread, index) => (
                    <ListItem
                      button
                      component={Link}
                      to={`/thread/${thread.id}`}
                    >
                      <ListItemText primary={thread.title} />
                      <div>
                        {"  by "}
                        <Link to={`/profile/${thread.author}`}>
                          {thread.author}
                        </Link>
                      </div>
                    </ListItem>
                  ))}
              </List>
            </div>
            <div>{isRegistered(this.props.auth) ? userActions : null}</div>
          </Grid>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
  threads: state.threads
});

Subcategory = withStyles(styles)(Subcategory);
export default connect(
  mapStateToProps,
  { getProfile, addSubcategory, getThreads, newThread }
)(Subcategory);
