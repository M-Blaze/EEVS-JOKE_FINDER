const REDUCER = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_CATEGORIES":
      return {
        ...state,
        categories: payload
      };

    case "SET_ACTIVE_CATEGORY":
      return {
        ...state,
        activeCategory: payload
      };

    default:
      return state;
  }
};

export default REDUCER;
