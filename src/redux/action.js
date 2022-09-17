export const logUser = (isLogged) => {
  return {
    type: "LOG_USER",
    value: isLogged,
  };
};

export const logOutUser = (isLogged) => {
  return {
    type: "LOGOUT_USER",
    value: isLogged,
  };
};

export const addListing = (listing) => {
  return {
    type: "ADD_LISTING",
    value: listing,
  };
};

export const removeListing = (index) => {
  return {
    type: "REMOVE_LISTING",
    value: index,
  };
};

export const filterListing = (listing) => {
  return {
    type: "FILTER_LISTING",
    value: listing
  }
}

export const setLatitude = (latitude) => {
  return {
    type: "SET_LATITUDE",
    value: latitude
  }
}

export const setLongitude = (longitude) => {
  return {
    type: "SET_LONGITUDE",
    value: longitude
  }
}
