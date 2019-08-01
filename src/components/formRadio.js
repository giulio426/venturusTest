import React, { Component } from "react";

export default class FormRadio extends Component {
  render() {
    return (
      <div className="formInputContainer verticalRow">
        <div className="row flex-space-between noPadding">
          <label for={this.props.name} className="">
            {this.props.label || ""}
          </label>
        </div>
        <div className="row noPadding flex-space-between">
          {this.props.values.map(i => {
            const checked = this.props.checked && this.props.checked == i;
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
                  className={["radioItem", checked ? "checked" : ""].join(" ")}
                >
                  {checked && <div className="radioItemChecked" />}
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
