import React from "react";
import Layout from "./Layout";

const Prelevel4b = () => {
  const text = [
    "Agent C: So it seems our next destination is France during the era of the Revolution......",
    "As I reach the Bastille, I see an advanced futuristic bomb is placed here right beneath the Bastille prison where all the insurgents are supposed to gather for the French Revolution. If that bomb goes off, the course of history changes for France, and by butterfly effect, for the World.",
    "Remember everything about this small nation, from the flag to the heroes(especially from the 18th century) and just cut all the unnecessary information."
  ];
  return (
    <div>
      <Layout text={text} speed={50} lvl={"4-2"} />
    </div>
  );
};

export default Prelevel4b;
