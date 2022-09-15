import { combineReducers } from "redux";

const user = (state = null) => state;
const map = (state = null) => state;

const listings = (state = [], action) => {
  switch (action.type) {
    case "ADD_LISTING":
      return [...state, action.value];
    case "REMOVE_LISTING":
      const copy = [...state];
      copy.splice(action.value, 1);
      return copy;
    default:
      return state;
  }
};

const isLogged = (state = false, action) => {
  switch (action.type) {
    case "LOG_USER":
      let logInCopy = state;
      logInCopy = true;
      return logInCopy;
    case "LOGOUT_USER":
      let logOutCopy = state;
      logOutCopy = false;
      return logOutCopy;
    default:
      return state;
  }
};

export default combineReducers({ user, listings, isLogged, map });
