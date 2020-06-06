import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import SubmitForm from "./SubmitForm";
import { connect } from "react-redux";
import { isAdmin } from "../userType";
import { newSubcategory, getSubcategories } from "../actions/categoryActions";
import  { useState, useEffect, useRef } from 'react';

const useIsMounted = () => {
  const isMounted = useRef(false);
  useEffect(() => {
    isMounted.current = true;
    return () => (isMounted.current = false);
  }, []);
  return isMounted;
};


function Category (props) {
  
  useEffect(() => {
  
    props.getSubcategories(props.name);
    
  },[] );
/*

  const isMounted = useIsMounted();
  useEffect  ( () => {
    console.log(props);

    if (props.load === false &&  isMounted.current) {
      console.log(props);
   let scs = props.subcatеgories.subcategories.filter (c => c.category === props.name)
   .map(c => c.name); 
   setSubcatеgories(scs);
    }
  }, [props])
*/
console.log(props);
    return (
      <div>
        <h1>{props.name}</h1>
        <div>
          {props.subcatеgories.subcategories.filter (c => c.category === props.name)
   .map(c => c.name).map((c, index) => (
            <h2 key={index}>
              <Link to={`/categories/${props.name}/${c}`}>{c}</Link>
            </h2>
          ))}
        </div>
    
      </div>
    );
          };

Category.propTypes = {
  newSubcategory: PropTypes.func.isRequired,
  getSubcategories: PropTypes.func.isRequired,
  subcatеgories: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  load : PropTypes.bool.isRequired
};

const mapStateToProps = state =>  {
 
  return {
  subcatеgories: state.subcategories,
  auth: state.auth,
  load : state.subcategories.load
} };

export default connect(
  mapStateToProps,
  { newSubcategory,  getSubcategories }
)(Category);
