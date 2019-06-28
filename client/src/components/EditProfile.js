import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
export default class EditProfile extends Component {
   

    render() {
        return (
            <div>
                 <div>
          <div className="row">
            <div className="col-md-6">
            <input accept="image/*" type="file"
             onChange={this.handleChange('photo')} 
             style={{display:'none'}} id="icon-button-file" />
            </div>
            
            </div>
            <div className="col-md-6" />
          
        </div>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    auth: state.auth
  });
  