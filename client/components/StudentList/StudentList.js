import React from "react";
import Student from "./Student";

const StudentList = (props) => {
  // console.log(props.students);

  let studentList = null;

  if (props.students.length > 0) {
    studentList = props.students.map((student) => (
      <Student
        key={student.id}
        firstName={student.firstName}
        lastName={student.lastName}
      />
    ));
  }

  return <div>{studentList}</div>;
};

export default StudentList;
