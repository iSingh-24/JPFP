const studentReducer = (state = [], action) => {
  if (action.type === "LOAD_STUDENT") {
    return action.student;
  }
  if (action.type === "ADD_STUDENT") {
    return [...state, action.student];
  }
  if (action.type === "LOAD_STUDENTS") {
    return action.students;
  }

  return state;
};

export default studentReducer;
