const campusReducer = (state = [], action) => {
  if (action.type === "LOAD_CAMPUSES") {
    return action.campuses;
  }
  if (action.type === "LOAD_CAMPUS") {
    return action.campus;
  }
  return state;
};

export default campusReducer;
