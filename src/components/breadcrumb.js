import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Breadcrumbs extends Component {
  render() {
    return (
      <div className="row flex-space-between backgroundColorLight">
        <div className="row smallVerticalPadding">
          <div className="marginRight8">
            <FontAwesomeIcon icon="home" className="colorHighlited" />
          </div>
          <b className="marginRight8">></b>
          <a href="#" className="colorHighlited marginRight8">
            Page Name
          </a>
          <b className="marginRight8">></b>
          <a href="#" className="colorHighlited marginRight8">
            Breadcrumb
          </a>
          <b className="marginRight8">></b>
          <span>Current page</span>
        </div>
      </div>
    );
  }
}
