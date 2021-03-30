const campusReducer = (state = [], action) => {
  if (action.type === "LOAD_CAMPUSES") {
    //we set this up with just returning action.campuses each time so that there aren't duplicates upon an initial loading. Remember Redux stores the universal state so if we load the same data multiple times, the store will keep getting updated
    return action.campuses;
  }
  if (action.type === "LOAD_CAMPUS") {
    return action.campus;
  }
  //add other campus actions here
  return state;
};

export default campusReducer;
