import React from "react";
import Layout from "./Layout";

const Prelevel8c = () => {
  const text = [
    "Nice! Your brilliant game has brought us very close to achieving what we intended to achieve ever since the beginning. ",
    "The protection of these timelines. It's nearing the end now. Andwyn is almost a-comin'. ",
    "The next challenge is the hardest of them all. Setting a trap on the human life database so that as soon as Andwyn tries to hack it he triggers the emergency system and soon the GCSSF military robots come in and exterminate him. ",
    "Mind you, this level will require a lot of hard work on your end, so be sure to keep a handy search software ready for finding answers. ",
  ];
  return (
    <div>
      <Layout text={text} speed={90} lvl={'8_3'} />
    </div>
  );
};

export default Prelevel8c;
