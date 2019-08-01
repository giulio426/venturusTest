import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class FormCheckBox extends Component {
  render() {
    return (
      <div className="formInputContainer ">
        <div className="row flex-space-between noPadding">
          <label for={this.props.name} className="">
            {this.props.label || ""}
          </label>
        </div>
        <div className="row noPadding flex-space-between">
          {this.props.values.map(i => {
            const checked =
              this.props.checked && this.props.checked.includes(i);
            return (
              <div
                className="radioContainer"
                onClick={() =>
                  this.props.onChange({
                    target: {
                      name: this.props.name,
                      value: i
                    }
                  })
                }
              >
                <div
                  className={[
                    "radioItem checkBox",
                    checked ? "checked" : ""
                  ].join(" ")}
                >
                  {checked && <FontAwesomeIcon icon="check" />}
                </div>
                <span className="radioItemLabel">{i}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
