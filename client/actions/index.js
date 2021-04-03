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
