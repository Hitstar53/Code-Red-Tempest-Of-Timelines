import React from "react";
import Layout from "./Layout";

const Prelevel7 = () => {
  const text = [
    "Agent C: I am impressed you got that one! I don't think I would have been able to do such a fine job myself! We are nearly there. As you already know, the next challenge is in North Korea in 2030 CE. We have to move fast because I already sense the temporal continuum starting to unsettle yet again.",
    "Andwyn has managed to put a 31st century invisible nano-particle shield around Kim Jong Un, the current leader of the nation, but we have to dismantle it and make sure that the assassination happens one way or another.",
  ];
  return (
    <div>
      <Layout text={text} speed={70} lvl={7} />
    </div>
  );
};

export default Prelevel7;