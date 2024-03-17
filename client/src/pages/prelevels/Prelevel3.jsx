import React from "react";
import Layout from "./Layout";

const Prelevel3 = () => {
  const text = [
    "Agent C: Good job! We have now been transported to the Pyramids of Giza. You see a device left on the floor. It looks like he was present here some time back, and might have dropped it while he was running awat from the guards.",
    "Hmm.. The code looks like some sort of language, and honestly at first, the characters look like random marks scribbles at first.\nI am unable to decipher this, but remember, keep your head calm whenever in panic, and your body hydrated whenever in the desert.....",
  ];
  return (
    <div>
      <Layout text={text} speed={50} lvl={"3-1"} />
    </div>
  );
};

export default Prelevel3;
