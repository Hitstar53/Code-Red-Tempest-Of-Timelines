import React from "react";
import Layout from "./Layout";

const Prelevel2 = () => {
  const text = [
    "This is Agent C from the future.\nSomething has been into the systems of TPA (Temporal Protection Authority).",
    "We still don't know if it's a deed of a person or something else. All we have is this code: \nu005400520024",
    "But this is horrifying. The thing is trying to change major historical events.",
    "And also, don't get surprised if you don't find the history as you know it, because it is not as you know it.",
    "It is not as you know it. . .",
  ];
  return (
    <div>
      <Layout text={text} speed={50} lvl={2} />
    </div>
  );
};

export default Prelevel2;
