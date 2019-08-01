import React, { Component } from "react";
import FormInput from "./formInput";
import FormRadio from "./formRadio";
import FormCheckBox from "./formCheckBox";

export default class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.initalState = {
      username: "",
      name: "",
      email: "",
      city: "",
      rideInGroup: "",
      dayOfWeek: []
    };
    this.state = this.initalState;
  }

  _discard = () => {
    this.setState(this.initalState);
  };

  _checkIfIsFilled = () => {
    const { username, name, email, rideInGroup, dayOfWeek } = this.state;
    return (
      username.length &&
      name.length &&
      email.length &&
      rideInGroup.length &&
      dayOfWeek.length
    );
  };

  _subimit = () => {
    if (this._checkIfIsFilled()) {
      this.props.addUser(this.state);
      this._discard();
    }
  };

  _inputChange = event => {
    const { name, value } = event.target;
    if (name == "dayOfWeek") {
      const arr = this.state.dayOfWeek;
      let newArr = [];
      if (arr.includes(value)) {
        newArr = arr.filter(item => item != value);
      } else {
        newArr = [...arr];
        newArr.push(value);
      }
      this.setState({ dayOfWeek: newArr });
    } else {
      const addToState = {};
      addToState[name] = value;
      this.setState({ ...addToState });
    }
  };

  render() {
    return (
      <div className="column">
        <div className="row flex-center">
          <div className="column column-9 flex-space-between ">
            <div className="row">
              <div className="column padding8 flex-space-between">
                <FormInput
                  name="username"
                  type="text"
                  label="Username"
                  onChange={this._inputChange}
                  value={this.state.username}
                  onFocusText="Instructios to show on input focus."
                />
                <FormInput
                  name="name"
                  type="text"
                  label="Name"
                  onChange={this._inputChange}
                  value={this.state.name}
                  onFocusText="Instructios to show on input focus."
                />
                <FormInput
                  name="email"
                  type="text"
                  label="E-mail"
                  onChange={this._inputChange}
                  value={this.state.email}
                  onFocusText="Instructios to show on input focus."
                />
              </div>
              <div className="column padding8 flex-space-between ">
                <FormInput
                  name="city"
                  type="text"
                  label="City"
                  onChange={this._inputChange}
                  value={this.state.city}
                  onFocusText="Instructios to show on input focus."
                  optional={true}
                />
                <FormRadio
                  name="rideInGroup"
                  label="Ride in group?"
                  onChange={this._inputChange}
                  checked={this.state.rideInGroup}
                  values={["Always", "Sometimes", "Never"]}
                />
                <FormCheckBox
                  name="dayOfWeek"
                  label="Days of week"
                  onChange={this._inputChange}
                  checked={this.state.dayOfWeek}
                  values={["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]}
                />
              </div>
            </div>
            <div className="row">
              <div onClick={this._subimit} className="button highlitedButton">
                {" "}
                Save{" "}
              </div>
              <div onClick={this._discard} className="button mutedButton">
                {" "}
                Discard{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
