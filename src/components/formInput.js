import React, { Component } from "react";

export default class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false
    };
  }

  onBlur = () => {
    this.setState({ focused: false });
  };
  onFocus = () => {
    this.setState({ focused: true });
  };

  render() {
    return (
      <div className="formInputContainer verticalRow">
        <div className="row flex-space-between noPadding">
          <label for={this.props.name} className="">
            {this.props.label || ""}
          </label>
          {this.props.optional && <small>optional</small>}
        </div>
        <input
          ref="input"
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          name={this.props.name}
          value={this.props.value}
          type={this.props.type}
          onChange={this.props.onChange}
        />
        {this.state.focused && this.props.onFocusText && (
          <small>{this.props.onFocusText}</small>
        )}
      </div>
    );
  }
}
