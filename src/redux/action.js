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
