import React from "react";
import Layout from "./Layout";

const Prelevel1 = () => {
  const text = [
    "This is Agent C, reaching out from the depths of time. Our Temporal Protection Authority systems have been breached. It's a Code Red and the implications can be grave.",
    "We need to access TPA Archives to gather a highly classified file written by Franklin, Elizabeth and John. TPA file names are generally obtained after double encoding.",
    "Help me find this file. It is a 3-letter long word, obtained after gathering some unique code.",
    "This unknown force is weaving its own threads into the narrative, altering crucial junctures in history.",
    "The past, as you've known it...\nis fading...\nfading into obscurity before our very eyes.",
  ];
  return (
    <div>
      <Layout text={text} speed={90} lvl={1} />
    </div>
  );
};

export default Prelevel1;
