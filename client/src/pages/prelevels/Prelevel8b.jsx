import React from "react";
import Layout from "./Layout";

const Prelevel8b = () => {
  const text = [
    "Woah! You made it through the first barrier of the GCSSF! Congratulations. I actually think we can make it now. ",
    "The next step is to deal with the pesky AI which they have guarding all their precious human life data. I managed to corrupt the majority of the AI but it poses one last challenge before it's total corruption.",
    "We need to win against it in a game of Connect Four. If we win we can successfully set traps and defeat Andwyn once and for all otherwise if we lose we have to keep playing again. ",
    "The game has only one point and if either you or the AI manage to connect four dots horizontally/vertically/diagonally you win immediately… so beware, stay sharp and smart.",
  ];
  return (
    <div>
      <Layout text={text} speed={90} lvl={'8-2'} />
    </div>
  );
};

export default Prelevel8b;
