import React from "react";
import Layout from "./Layout";

const Prelevel4 = () => {
  const text = [
    "Andwyn. This is the first time I have heard this name. Let me find out more about this guy. While you were deciphering this, I was also trying to search something. Here is a USB that I found. I cannot physically give you that, so I'll load the contents on your screen.",
    "Well, it talks about an important event in French history, but the message is so jumbled it makes no sense. I'll suggest you to create a decoder of your own, as you cannot trust any outsider, and I'll tell you this, the first 26 numbers are special, and that life is but a loop of peace and pain.......\"Vwruplqi ri Edvwlooh\" - An important event in the French history",
  ];
  return (
    <div>
      <Layout text={text} speed={50} lvl={"4-1"} />
    </div>
  );
};

export default Prelevel4;