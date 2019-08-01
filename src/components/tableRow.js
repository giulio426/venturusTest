import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class TableRow extends Component {
  render() {
    return (
      <React.Fragment>
        <tr>
          <td>{this.props.user.username}</td>
          <td>{this.props.user.name}</td>
          <td>
            <a
              target="_blank"
              className="colorHighlited"
              href={`mailto:{this.props.user.email}`}
            >
              {this.props.user.email}
            </a>
          </td>
          <td>
            <a
              target="_blank"
              className="colorHighlited"
              href={
                this.props.user.address && this.props.user.address.geo
                  ? `https://www.google.com/maps/search/?api=1&query=${
                      this.props.user.address.geo.lat
                    },${this.props.user.address.geo.lng}`
                  : "#"
              }
            >
              {this.props.user.address.city}
            </a>
          </td>
          <td>{this.props.user.rideInGroup}</td>
          <td>{this.props.user.dayOfWeek}</td>
          <td>{this.props.user.posts || 0}</td>
          <td>{this.props.user.albums || 0}</td>
          <td>{this.props.user.photos || 0}</td>
          <td className="clicklabe">
            <FontAwesomeIcon
              onClick={this.props.removeUser}
              icon="trash"
              className="colorHighlited displayOnHover"
            />
          </td>
        </tr>
      </React.Fragment>
    );
  }
}
