import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class TopHeader extends Component {
  render() {
    return (
      <div className="row flex-space-between">
        <div className="row mediumVerticalPadding">
          <div className="topHeaderIconContainer">
            <FontAwesomeIcon
              icon="volleyball-ball"
              className="topHeaderIcon"
              color="white"
            />
          </div>
          <span className="topHeaderTitle">Venturus Sports</span>
        </div>
        <div className="row mediumVerticalPadding">
          <span className="userInitials">JB</span>
          <span className="userNameTitle">
            Jason Bourne <FontAwesomeIcon icon="angle-down" />
          </span>
        </div>
      </div>
    );
  }
}
