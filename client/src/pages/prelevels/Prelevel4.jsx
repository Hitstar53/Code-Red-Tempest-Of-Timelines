import React from "react";
import Layout from "./Layout";

const Prelevel4 = () => {
  const text = [
    "Agent C: I knew you had it in you to solve moderately difficult problems! There's a USB underneath that first glass. Let's look at what it contains.",
    "Well, it talks about an important event in French history, but the message is so jumbled it makes no sense. I'll suggest you to create a decoder of your own, as you cannot trust any outsider, and I'll tell you this, the first 26 numbers are special, and that life is but a loop of peace and pain.......\"Vwruplqi ri Edvwlooh\" - An important event in the French history",
  ];
  return (
    <div>
      <Layout text={text} speed={50} lvl={4} />
    </div>
  );
};

export default Prelevel4;