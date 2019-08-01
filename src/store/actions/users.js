import { GET_USERS, ADD_USER, DELETE_USERS, FILTER_USER } from "../actionTypes";
import axios from "axios";

export const getUsers = () => {
  return async dispatch => {
    const usersDb = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    var users = [];

    const makeUsers = usersDb.data.map(async (i, k) => {
      const arrPromises = [
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${i.id}`),
        axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${i.id}`),
        axios.get(
          `http://my-json-server.typicode.com/giulio426/fakeApi/userExtraData?userId=${
            i.id
          }`
        )
      ];
      const [posts, albums, extraData] = await Promise.all(arrPromises);
      let albunsId = albums.data.map(i => `albumId=${i.id}`);
      const photos = await axios.get(
        `https://jsonplaceholder.typicode.com/photos?${albunsId.join("&")}`
      );

      const user = { ...i };
      user.posts = posts.data.length;
      user.albums = albums.data.length;
      user.photos = photos.data.length;
      user.dayOfWeek = extraData.data[0].dayOfWeek;
      user.rideInGroup = extraData.data[0].rideInGroup;
      users.push(user);
    });

    Promise.all(makeUsers).then(completed => {
      dispatch({
        type: GET_USERS,
        payload: {
          users
        }
      });
    });
  };
};

export const addUser = data => {
  return async dispatch => {
    const submitData = { ...data };
    submitData.dayOfWeek = submitData.dayOfWeek.join(",");
    submitData.address = { city: submitData.city || "" };
    delete submitData.city;

    const savedUser = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      submitData
    );

    dispatch({
      type: ADD_USER,
      payload: {
        user: savedUser.data
      }
    });
  };
};

export const removeUser = userId => {
  return dispatch => {
    dispatch({
      type: DELETE_USERS,
      payload: {
        userId
      }
    });
  };
};

export const filterUser = filter => {
  return dispatch => {
    dispatch({
      type: FILTER_USER,
      payload: {
        filter
      }
    });
  };
};
