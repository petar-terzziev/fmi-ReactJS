import React from "react";
import { Link } from "react-router-dom";

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      software: [],
      hardware: []
    };
  }



  render() {
    return (
      <div>
        <div>
          Software:
          {this.state.software.map((c, index) => (
            <div key={index}>
              <Link to={"categories/" + c}>{c}</Link>
              &nbsp;
            </div>
          ))}
        </div>
        <div>
          Hardware:
          {this.state.hardware.map((c, index) => (
            <div key={index}>
              <Link to={"categories/" + c}>{c}</Link>
              &nbsp;
            </div>
          ))}
        </div>
      </div>
    );
  }
}


export default Categories;
