import React from "react";

const Student = (props) => {
  return (
    <div>
      <h4>{`${props.firstName} ${props.lastName}`}</h4>
      <img
        src={props.imgUrl}
        height="100"
        alt={`Picture of ${props.firstName}`}
      />
    </div>
  );
};

export default Student;
