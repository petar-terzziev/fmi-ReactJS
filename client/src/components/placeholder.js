import React from "react";
import PropTypes from "prop-types";
import { MdCloudUpload } from "react-icons/md";

const Placeholder = ({ error, touched, getRootProps, getInputProps }) => (
            <div {...getRootProps({className: 'dropzone'})}>
              <input {...getInputProps()} />
    <MdCloudUpload style={{ fontSize: 100, paddingTop: 70 }} />
    <p>Click or drag image file to this area to upload.</p>
  </div> 
);

Placeholder.propTypes = {
  error: PropTypes.string,
  touched: PropTypes.bool,
    getInputProps : PropTypes.func.isRequired,
    getRootProps : PropTypes.func.isRequired

};

export default Placeholder;
