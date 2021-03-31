import React from "react";

const Home = () => {
  const style = {
    backgroundColor: "red",
    display: "inline-block",
  };
  return (
    <div className="container">
      <h4 className="center">HELLOOOOO PEOPLEEEEEE</h4>
      <img
        height="500"
        src="https://media1.giphy.com/media/FbN4MpJnIwLQc/source.gif"
      ></img>
      <h4 style={style}>WHO'S READY TO LEARN!!!</h4>
    </div>
  );
};

export default Home;
