import React from "react";
import Layout from "./Layout";

const Prelevel3 = () => {
  const text = [
    "Agent C: Congratulations on completing the previous challenge! You've now been transported to the Pyramids of Giza. Now let me see the code which you cannot decipher.....",
    "Hmm.. The code looks like some sort of language, and honestly at first, the characters look like random marks scribbles at first.\nI am unable to decipher this, but remember, keep your head calm whenever in panic, and your body hydrated whenever in the desert.....",
  ];
  return (
    <div>
      <Layout text={text} speed={50} lvl={"3-1"} />
    </div>
  );
};

export default Prelevel3;
