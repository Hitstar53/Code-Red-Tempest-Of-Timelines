import React from "react";
import Layout from "./Layout";

const Prelevel5 = () => {
  const text = [
    "Congratulations on completing yet another challenge! You may have saved Paris, but the hunt is far from over. Now that you have defused the explosive, please let me examine it more closely to find any clues.",
    "Hmm. I found this number written on the backside of the explosive, 64638336 74989 34448, and a message: 'Zivz 51, Mvezwz' .I cannot seem to make anything out of it. Are you able to? Reminds me of some random keys pressed on a 20th century device called a phone...",
  ];
  return (
    <div>
      <Layout text={text} speed={50} lvl={5} />
    </div>
  );
};

export default Prelevel5;