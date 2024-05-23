import React from "react";
import Boxes from "./Boxes";

const SecondPage = () => {
    const data = [
        {
            id: 1,
            background: "blue",
            color: "color-white"
        },
        {
            id: 2,
            background: "white",
            color: "color-blue"
        },
        {
            id: 2,
            background: "white",
            color: "color-blue"
        },
        {
            id: 4,
            background: "blue",
            color: "color-white"
        },
    ]
  return (
    <main>
      <div className="right">
        <h1 className="courier-family">Why Choose Us?</h1>
        <p>
          Are you ready to unlock your full potential and become a catalyst for
          change in Africa? Join Ultra Africa Community today and embark on a
          journey of discovery, learning, and empowerment. Whether you're a
          student, entrepreneur, professional, or changemaker, there's a place
          for you in our community. Together, we can create a brighter future
          for ourselves and generations to come.
        </p>
      </div>
      <Boxes data={data} />
    </main>
  );
};

export default SecondPage;
