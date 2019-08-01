import React, { Component } from "react";
import HeaderPiece from "./headerPiece";

export default class Breadcrumbs extends Component {
  render() {
    return (
      <div className="row flex-space-between backgroundColorGreen">
        <div className="row largeVerticalPadding">
          <HeaderPiece icon="puzzle-piece" title="Sport type" value="Cycling" />
          <HeaderPiece icon="trophy" title="Mode" value="Advanced" />
          <HeaderPiece icon="map-signs" title="Route" value="30 miles" />
        </div>
      </div>
    );
  }
}
