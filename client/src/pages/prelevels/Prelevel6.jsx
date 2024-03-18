import React from "react";
import Layout from "./Layout";

const Prelevel6 = () => {
  const text = [
    "You have managed to reach the correct destination, I see! The enemy is swift, but good job matching his pace and putting an end to all his evil deeds. We are getting closer and closer to putting an end to this mess once and for all.",
    "Now the next challenge is in Area 51, Nevada. This year is 1968 CE, and the first microprocessor has just been processed from the remains of a UFO crash. Down the line, this groundbreaking discovery is going to bring wonders for mankind, but right now the discovery lies at the risk of being blown into smithereens.",
    "I sense Andwyn has messed up with the controls and initiated a self-destruct sequence for the entire research base. Не has also left behind a set of instructions to deactivate the timer. Before the timer goes out, I need you to comprehend the instructions and stop the self-destruct sequence.",
    "The instructions are: 1.Jumping joyful jellybeans jiggle jubilantly. \n 2.Hidden in the 64th base, the answer needs to be converted to legible language.",
    " Be quick otherwise we may run out of time!",
  ];
  return (
    <div>
      <Layout text={text} speed={50} lvl={"6-1"} />
    </div>
  );
};

export default Prelevel6;
