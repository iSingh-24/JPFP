import axios from "axios";

export const addStudent = (student) => {
  return {
    type: "ADD_STUDENT",
    student,
  };
};

export const deleteStudent = (student) => {
  return {
    type: "DELETE_STUDENT",
    student,
  };
};

export const loadStudents = (students) => {
  return {
    type: "LOAD_STUDENTS",
    students,
  };
};

//Loads single student
export const loadStudent = (student) => {
  return {
    type: "LOAD_STUDENT",
    student,
  };
};

export const loadCampuses = (campuses) => {
  return {
    type: "LOAD_CAMPUSES",
    campuses,
  };
};

export const loadCampus = (campus) => {
  return {
    type: "LOAD_CAMPUS",
    campus,
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

export const fetchStudent = (studentId) => {
  return async (dispatch) => {
    const student = (await axios.get(`/api/students/${studentId}`)).data;
    dispatch(loadStudent(student));
  };
};

export const fetchCampus = (campusId) => {
  return async (dispatch) => {
    const campus = (await axios.get(`/api/campuses/${campusId}`)).data;
    dispatch(loadCampus(campus));
  };
};
//we pass in studentId because we need to find a single student by the id we ourselves pass in from the single student component

//whatever we export from this file, we need to destructure with the same name we gave it in here when bringing it in wherever we import it
//export other action creaters here
