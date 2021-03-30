import React from "react";
const Campus = (props) => {
  return (
    <div>
      <h4>{props.name}</h4>
      <img src={props.imgUrl} height="100" alt={`image for ${props.name}`} />
    </div>
  );
};

export default Campus;
