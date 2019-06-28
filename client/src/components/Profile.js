import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getCurrentProfile from '.././actions/profileActions';



export default class Profile extends Component {
    construct(){
        super();

    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

Profile.PropTypes = {
    getCurrentProfile : PropTypes.func.isRequired,
    profile : PropTypes.object,
    auth :  PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
  });

