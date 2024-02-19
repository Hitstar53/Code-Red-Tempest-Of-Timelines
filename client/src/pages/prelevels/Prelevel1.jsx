import React from "react";
import Layout from "./Layout";

const Prelevel1 = () => {
  const text = [
    "This is Agent C, reaching out from the depths of time. Our Temporal Protection Authority systems have been breached. It's a Code Red and the implications can be grave.",
    "All we have is the code u0054u0052u0024. Something, a mysterious existence, is meddling with the very fabric of time itself.",
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
