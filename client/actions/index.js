import campusReducer from "../reducers/campusReducer";
import axios from "axios";

export const addStudent = (student) => {
  return {
    type: "ADD_STUDENT",
    payload: student,
  };
};

export const deleteStudent = (student) => {
  return {
    type: "DELETE_STUDENT",
    payload: student,
  };
};

export const loadStudents = (students) => {
  return {
    type: "LOAD_STUDENTS",
    payload: students,
  };
};

export const loadCampuses = (campuses) => {
  return {
    type: "LOAD_CAMPUSES",
    payload: campuses,
  };
};

export const fetchCampuses = () => {
  return async (dispatch) => {
    const campuses = (await axios.get("/api/campuses")).data;
    dispatch(loadCampuses(campuses));
  };
};

export const fetchStudents = () => {
  return async (dispatch) => {
    const students = (await axios.get("/api/students")).data;
    dispatch(loadStudents(students));
  };
};

//whatever we export from this file, we need to destructure with the same name we gave it in here when bringing it in wherever we import it
//export other action creaters here
