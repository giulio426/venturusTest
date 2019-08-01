import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addUser } from "../store/actions/users";
import RegistrationIconBox from "./registrationIconBox";
import RegistrationForm from "./registrationForm";
class Registration extends Component {
  render() {
    return (
      <div className="column">
        <div className="row flex-space-between">
          <div className="column column-2">
            <h2>Registration</h2>
          </div>
          <div className="column collumn-8 verticalCenter">
            <div className="divder" />
          </div>
        </div>
        <div className="row">
          <div className="column column-3">
            <RegistrationIconBox
              icon={["far", "life-ring"]}
              title="Need help?"
              value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            />
          </div>

          <div className="column column-3">
            <RegistrationIconBox
              icon="heartbeat"
              title="Why register?"
              value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            />
          </div>

          <div className="column column-3">
            <RegistrationIconBox
              icon={["far", "smile"]}
              title="What people are saying"
              value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            />
          </div>
        </div>
        <div className="row">
          <RegistrationForm addUser={this.props.addUser} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addUser
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Registration);
