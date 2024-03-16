import React from "react";
import Layout from "./Layout";

const Prelevel4b = () => {
  const text = [
    "Agent C: So it seems your next destination is France during the era of the Revolution......",
    "I've just received a message that an advanced futuristic bomb is being transported right beneath the Bastille prison where all the insurgents are supposed to gather for the French Revolution. If that bomb goes off, the course of history changes for France, and by butterfly effect, for the World. You have five minutes.....",
  ];
  return (
    <div>
      <Layout text={text} speed={50} lvl={"4-2"} />
    </div>
  );
};

export default Prelevel4b;
