import React from "react";
import Campus from "./Campus";

const CampusList = (props) => {
  const campusNames = props.campuses.map((campus, index) => (
    <Campus name={campus.name} key={index} student={campus.students} />
  ));

  return <div>{campusNames}</div>;
};

export default CampusList;
