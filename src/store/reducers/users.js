import { ADD_USER, GET_USERS, DELETE_USERS, FILTER_USER } from "../actionTypes";

const initialState = {
  users: [],
  filteredUsers: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USERS: {
      const { users } = action.payload;
      return {
        ...state,
        users,
        filteredUsers: users
      };
    }
    case ADD_USER: {
      const { user } = action.payload;
      return {
        ...state,
        users: [...state.users, user]
      };
    }
    case DELETE_USERS: {
      const { userId } = action.payload;
      const users = state.users.filter((i, k) => i.id !== userId);
      return {
        ...state,
        users
      };
    }
    case FILTER_USER: {
      const { filter } = action.payload;
      const filteredUsers = state.users.filter(item => {
        return Object.keys(item).some(key => {
          return item[key]
            .toString()
            .toLowerCase()
            .includes(filter.toLowerCase());
        });
      });
      return {
        ...state,
        filteredUsers
      };
    }
    default:
      return state;
  }
}
