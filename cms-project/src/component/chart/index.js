import React, { Component } from "react";
import Chartbar from "./chartbar";
import Chartline from "./chartline";

export class index extends Component {
  render() {
    return (
      <div>
        <Chartbar />
        <Chartline />
      </div>
    );
  }
}

export default index;
