import React from "react";
import Layout from "./Layout";

const Prelevel3b = () => {
  const text = [
    "HTML? What does that even mean?. It's a 21st century website making language but what relevance does it have here?. Let's see what comes up when I search it on TPA archives...",
  ];
  return (
    <div>
      <Layout text={text} speed={50} lvl={"3-2"} />
    </div>
  );
};

export default Prelevel3b;
