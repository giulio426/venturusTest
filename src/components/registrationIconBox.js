import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class RegistrationIconBox extends Component {
  render() {
    return (
      <div className="row noPadding marginRight24 marginBottom24">
        <div className="verticalRow">
          <span className="lightText colorHighlited marginBottom24">
            {this.props.title}
          </span>
          <div className="row noPadding">
            <div className="column column-3">
              <FontAwesomeIcon
                icon={this.props.icon}
                className="highlitedIcon "
              />
            </div>
            <div className="column">
              <p>{this.props.value}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
