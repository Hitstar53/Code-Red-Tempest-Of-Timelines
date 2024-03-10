import React from "react";
import Layout from "./Layout";

const Prelevel3b = () => {
  const text = [
    "Agent C: As you've been told, the secret lies in glass one. This should be a piece of cake for you,keep in mind the code you've deciphered, and that a little inspection hurts no one......",
  ];
  return (
    <div>
      <Layout text={text} speed={50} lvl={"3-2"} />
    </div>
  );
};

export default Prelevel3b;
