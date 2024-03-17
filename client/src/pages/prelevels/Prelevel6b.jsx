import React from "react";
import Layout from "./Layout";

const Prelevel6b = () => {
  const text = [
    "Nice! Your brilliant game has brought us closer to achieving what we intended to achieve ever since the beginning. The protection of these timelines.",
    " The next challenge is somewhat similar to the previous one wherein you have to solve the given questions to successfully manipulate the network of Area 51.", 
    " Mind you, this level will require a lot of hard work on your end, so be sure to keep a handy search software ready for finding answers. ",

  ];
  return (
    <div>
      <Layout text={text} speed={90} lvl={'6-2'} />
    </div>
  );
};

export default Prelevel6b;
