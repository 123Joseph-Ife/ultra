import React from "react";

const Boxes = ({ data }) => {
  return (
    <div className="boxes">
      {data.map((box) => (
        <div className={`box ${box.background} ${box.color}`}>
          <h3>Lorem Ipsum</h3>
          <p>
            Join Ultra Africa Community today and embark on a journey of
            discovery, learning, and empowerment
          </p>
        </div>
      ))}
    </div>
  );
};

export default Boxes;
