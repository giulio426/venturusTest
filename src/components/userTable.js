import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getUsers, filterUser } from "../store/actions/users";
import Table from "./table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class UserTable extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  _filterUser = event => {
    const { value } = event.target;
    this.props.filterUser(value);
  };

  render() {
    return (
      <div className="column">
        <div className="row flex-space-between">
          <div className="column column-1">
            <h2>Users</h2>
          </div>
          <div className="column collumn-9 verticalCenter">
            <div className="divder" />
          </div>
          <div className="column column-2 verticalCenter">
            <div className="inputContainer">
              <FontAwesomeIcon icon="search" className="" />
              <input
                onChange={this._filterUser}
                type="text"
                placeholder="Filter Table Content"
              />
            </div>
          </div>
        </div>

        <Table />
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
      getUsers,
      filterUser
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserTable);
