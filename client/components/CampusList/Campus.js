import React from "react";
import "../App.css";
const Campus = (props) => {
  let studentName = <p>None</p>;

  //students will be an array of objects

  if (props.student.length !== 0) {
    studentName = props.student.map((student) => (
      <li key={student.id}>{student.firstName}</li>
    ));
  }

  return (
    <div className="campus">
      <h1>{props.name}</h1>
      <h2>Students: {studentName}</h2>
    </div>
  );
};

export default Campus;
