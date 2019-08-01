import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class HeaderPiece extends Component {
  render() {
    return (
      <div className="row noPadding marginRight24">
        <FontAwesomeIcon icon={this.props.icon} className="highlitedIcon" />
        <div className="verticalRow">
          <span className="lightText">{this.props.title}</span>
          <h3>{this.props.value}</h3>
        </div>
      </div>
    );
  }
}
