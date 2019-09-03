import React from "react";
import PropTypes from "prop-types";

const ImagePreview = ({ imagefile }) => 
  imagefile.map(({ name, path, size }) => (
    <div key={name} className="render-preview">
      <div className="image-container">
        <img src={`http://localhost:8000/${path}`} alt={name}  style={{ height: 80,width: 80 }}/>
      </div>
      <div className="details">
        {name} - {(size / 1024000).toFixed(2)}MB
      </div>
    </div>
  ))
;

ImagePreview.propTypes = {
  imagefile: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
};

export default ImagePreview;
