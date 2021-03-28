const studentReducer = (state = [], action) => {
  if (action.type === "ADD_STUDENT") {
    return [...state, action.payload];
  }
  if (action.type === "LOAD_STUDENTS") {
    return action.payload;
  }
  //add a delete functionality, we could possibly use the filter method? no we would do this with the destroy();
  return state;
};

export default studentReducer;
