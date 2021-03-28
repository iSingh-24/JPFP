const campusReducer = (state = [], action) => {
  if (action.type === "LOAD_CAMPUSES") {
    return [...state, ...action.payload];
  }
  //add other campus actions here
  return state;
};

export default campusReducer;
