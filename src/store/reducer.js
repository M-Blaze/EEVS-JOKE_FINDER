const REDUCER = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_CATEGORIES":
      return {
        ...state,
        categories: payload
      };
    default:
      return state;
  }
};

export default REDUCER;
