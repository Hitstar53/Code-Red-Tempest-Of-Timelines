import React from "react";
import Layout from "./Layout";

const Prelevel1 = () => {
  const text = [
    "This is Agent C, reaching out from the depths of time. Our Temporal Protection Authority systems have been breached. It's a Code Red and the implications can be grave.",
    "This unknown force is weaving its own threads into the narrative, altering crucial junctures in history.",
    "We need to access TPA Archives to gather a highly classified file written by F ranklin, E lizabeth and J ohn. TPA file names are generally obtained after double encoding.",
    "Help me find this file. It is a 3-letter long word, obtained after manipulating the characters into numbers and converting to a certain unique code.",
    "The past, as you've known it...\nis fading...\nfading into obscurity before our very eyes.",
  ];
  return (
    <div>
      <Layout text={text} speed={90} lvl={1} />
    </div>
  );
};

export default Prelevel1;
