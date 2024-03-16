import React from "react";
import Layout from "./Layout";

const Prelevel8b = () => {
  const text = [
    "Woah! You made it through the first barrier of the GCSSF! Congratulations. I actually think we can make it now. ",
    "The next step is to deal with the pesky AI which they have guarding all their precious human life data. I managed to corrupt the majority of the AI but it poses one last challenge before it's total corruption.",
    " We need to tie against it or win in a game of Connect Four. If we win we get +5 minutes of time to set traps otherwise if we tie we get no extra time but move on to the next level. ",
    "The game has only one point and if either you or the AI manage to connect four dots horizontally/vertically/diagonally you win immediately… so beware, stay sharp and smart.",
  ];
  return (
    <div>
      <Layout text={text} speed={90} lvl={'8-2'} />
    </div>
  );
};

export default Prelevel8b;
