import React, { Component } from "react";
import PropTypes from "prop-types";
import DropZone from "react-dropzone";
import ImagePreview from "./ImagePreview";
import Placeholder from "./placeholder";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { postproduct } from ".././actions/productActions";
import TextAreaFieldGroup from "./TextAreaFieldGroup";
import TextField from '@material-ui/core/TextField';
class AddProduct extends Component {
  constructor(props) {
    super(props);
    console.log("ok");
    this.state = {
      name: "",
      price: 0,
      descr: "",
      photo: [],
      trade : false
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  
  onDrop = newImageFile => this.setState({ photo: newImageFile });

  
  onsubmit = e => {
    e.preventDefault();
    
    const productData = new FormData();
    productData.append("selllerid", this.props.auth.user.id);
    productData.append("name", this.state.name);
    productData.append("price", this.state.price);
    productData.append("descr", this.state.descr);
    productData.append("photo",this.state.photo[0]);
    productData.append("trade", this.state.trade);
    this.props.postproduct(
      productData,
      this.props.history
    );
  };
  render() {
    return (
      <form>
      <div
        style={{
          width: "400px",
          margin: "30px auto",
          backgroundColor: "#F8F7FA",
          padding: "15px"
        }}
      >
           <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="name"
                name="name"
                autoComplete="name"
                value = {this.state.username}
                onChange = {this.onChange}
                autoFocus
                    />
             <TextField
        id="price"
        name = "price"
        label="price"
        value={this.state.price}
        onChange={this.onChange}
        type="number"
        margin="normal"
      />
        <DropZone
            accept="image/jpeg, image/png, image/gif, image/bmp"
            className="upload-container"
            onDrop={this.onDrop}
            onChange={file => this.OnDrop(file)}
          >
            {({ getRootProps, getInputProps }) =>
              this.state.photo && this.state.photo.length > 0 ? (
                <ImagePreview name = "imagepreview" imagefile={this.state.photo} />
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
        <TextAreaFieldGroup
          name="descr"
          value={this.state.descr}
          onChange={this.onChange}
        />
                <button
          type="button"
          className="uk-button uk-button-primary uk-button-large"
          onClick={this.onsubmit}
        >
          Submit
        </button>
        <button
          type="button"
          className="uk-button uk-button-default uk-button-large"
          style={{ float: "right" }}
        >
          Clear
        </button>
      </div>
      
      </form>
    );
  }
}

AddProduct.propTypes = {
    postproduct: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {postproduct}
)(withRouter(AddProduct));
