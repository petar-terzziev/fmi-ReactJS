import React, { Component } from "react";
import DropZone from "react-dropzone";
import ImagePreview from "./ImagePreview";
import Placeholder from "./placeholder";
import ShowError from "./ShowErrors";


const imageIsRequired = value => (!value ? "Required" : undefined);

class UploadImageForm extends Component {
  constructor(props){
    super(props);
   this.state = { imageFile: [] };

  }
  handleFormSubmit = formProps => {

    this.props.onDrop(this.state.imageFile);

  };

  handleOnDrop = newImageFile => this.setState({ imageFile: newImageFile });

  resetForm = () => this.setState({ imageFile: [] }, () => this.props.reset());

  render = () => (
    <div className="app-container">
      <h1 className="title">Upload An Image</h1>
      <hr />
      <form>
      <div className="preview-container">
    <DropZone
      accept="image/jpeg, image/png, image/gif, image/bmp"
      className="upload-container"
      onDrop={this.handleOnDrop}
      onChange={file => this.handleOnDrop(file)}
    >
  {({getRootProps, getInputProps}) => 
    this.state.imageFile&&this.state.imageFile.length >0 ?
    (
      <ImagePreview imagefile={this.state.imageFile} />
    ) : ( <Placeholder
      error={'nononon'}
      touched={false}
      getInputProps={getInputProps}
      getRootProps={getRootProps}
    />) 
  }
    </DropZone>
    {imageIsRequired(this.state.imageFile)===undefined && imageIsRequired(this.state.imageFile) && <ShowError error={imageIsRequired(this.state.imageFile)} />}
    </div>
    <button
      type = "button" 
          className="uk-button uk-button-primary uk-button-large"
          onClick={this.handleFormSubmit}
         
        >
          Submit
        </button>
        <button
          type="button"
          className="uk-button uk-button-default uk-button-large"
          disabled={this.props.pristine || this.props.submitting}
          onClick={this.resetForm}
          style={{ float: "right" }}
        >
          Clear
        </button>
    </form>
  </div>
      
  );
}

export default UploadImageForm;
