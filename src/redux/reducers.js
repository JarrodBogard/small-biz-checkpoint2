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

const detailsList = (state = [], action) => {
  switch (action.type) {
    case "FILTER_LISTING":
      const copy = state;
      if (copy.length) {
        copy.splice(0, 1);
        copy.push(action.value);
      } else copy.push(action.value);
      // copy.length ? copy.splice(0, 1) : copy.push(action.value);
      return copy;
    default:
      return state;
  }
};

const latitude = (state = null, action) => {
  switch (action.type) {
    case "SET_LATITUDE":
      return action.value;
    default:
      return state;
  }
};

const longitude = (state = null, action) => {
  switch (action.type) {
    case "SET_LONGITUDE":
      return action.value;
    default:
      return state;
  }
};

export default combineReducers({
  user,
  listings,
  isLogged,
  detailsList,
  latitude,
  longitude,
  map,
});
