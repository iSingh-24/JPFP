import React from "react";

const Home = () => {
  const style = {
    backgroundColor: "red",
    display: "inline-block",
  };
  return (
    <div className="container">
      <h4 className="center"></h4>
      <img
        height="500"
        src="https://steamuserimages-a.akamaihd.net/ugc/924798949903944122/D80A7BA488E755FBBC1AEA97C905992E81CDD2C5/"
      ></img>
      <h4 style={style}>WHO'S READY TO LEARN!!!</h4>
    </div>
  );
};

export default Home;
