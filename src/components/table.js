import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TableRow from "./tableRow";
import { removeUser } from "../store/actions/users";
class UserTable extends Component {
  render() {
    const { users } = this.props;
    return (
      <div className="row">
        <table>
          <thead>
            <tr>
              <td>Username</td>
              <td>Name</td>
              <td>E-mail</td>
              <td>City</td>
              <td>Ride in group</td>
              <td>Day of the week</td>
              <td>Posts</td>
              <td>Albums</td>
              <td>Photos</td>
              <td />
            </tr>
          </thead>
          <tbody>
            {users.map((i, k) => {
              return (
                <TableRow
                  user={i}
                  key={`userKey${k}`}
                  removeUser={() => this.props.removeUser(i.id)}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      removeUser
    },
    dispatch
  );
const mapStateToProps = state => ({
  users: state.users.filteredUsers
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserTable);
