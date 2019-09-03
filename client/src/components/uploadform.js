import React, { Component } from "react";
import DropZone from "react-dropzone";
import ImagePreview from "./ImagePreview";
import Placeholder from "./placeholder";
import ShowError from "./ShowErrors";

const imageIsRequired = value => (!value ? "Required" : undefined);

class UploadImageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { imageFile: [] };
  }
  handleFormSubmit = formProps => {
    console.log(this.state.imageFile)
    this.props.sth  = this.state.imageFile;
  };

  handleOnDrop = newImageFile => this.setState({ imageFile: newImageFile });

  resetForm = () => this.setState({ imageFile: [] }, () => this.props.reset());

  render = () => (
    <div className="app-container">
      <h1 className="title">Upload An Image</h1>
      <hr />
      
        <div className="preview-container">
          <DropZone
            accept="image/jpeg, image/png, image/gif, image/bmp"
            className="upload-container"
            onDrop={this.handleOnDrop}
            onChange={file => this.handleOnDrop(file)}
          >
            {({ getRootProps, getInputProps }) =>
              this.state.imageFile && this.state.imageFile.length > 0 ? (
                <ImagePreview imagefile={this.state.imageFile} />
              ) : (
                <Placeholder
                  error={"nononon"}
                  touched={false}
                  getInputProps={getInputProps}
                  getRootProps={getRootProps}
                />
              )
            }
          </DropZone>
          {imageIsRequired(this.state.imageFile) === undefined &&
            imageIsRequired(this.state.imageFile) && (
              <ShowError error={imageIsRequired(this.state.imageFile)} />
            )}
        </div>
    </div>
  );
}

export default UploadImageForm;
