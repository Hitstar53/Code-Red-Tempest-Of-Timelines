import React from "react";
import Layout from "./Layout";

const Prelevel2 = () => {
  const text = [
    "We've unearthed a trail, a fragment of the enigma we seek. It points us towards a figure, a soft-physicist, delving into realms beyond human comprehension.",
    "Soft physics is a fusion of artificial intelligence and physics, promising to unveil the secrets of the universe.",
    "In his conquest to disrupt time, he left behind a cryptic note: \"Where Nile's embrace meets the builders' grace, In ancient eyes, a mystical trance. Veiled secrets in the shadows' dance, Amidst the ages, echoes find, A geometric answer, a puzzle entwined.",
    "Beneath Orion's gaze, where Nile dreams unfold, Pharaoh Khufu slumbers, in sands of time, enfolded. Legacy guarded by structures, rising bold, Whispers of an empire's heartbeat, mystically told.",
    "Pyramids stand, celestial tokens of peace, Echoes in the desert, where secrets never cease. Sphinx, silent guardian in the shifting breeze, Whispers riddles, cryptic keys released.",
    "Sovereign of eternity, in eternal release, Khufu's rest, a cryptic dance that will never cease.",
    "Now, the time machine awaits. Enter credentials cautiously. Choose wisely, for time itself hangs in the balance, awaiting your rescue...",
  ];
  return (
    <div>
      <Layout text={text} speed={50} lvl={2} />
    </div>
  );
};

export default Prelevel2;
