import React from "react";
import Layout from "./Layout";

const Prelevel4 = () => {
  const text = [
    "Andwyn… it’s the first time I heard that name. Also, I have found some more stuff on the TPA archives. It’s bad…. Another code I know nothing about. Please solve this mystery and find the secrets behind ‘Andwyn’:",
    "In the land of the rising sun, where swords dance in the breeze, A noble samurai, undefeated, whose victories never cease. One month and one day since his demise, On what day does his legend realize?",
    "The next one is: In the land where democracy's seed was sown, A new chapter in history was honed. Rights and freedoms, the people sought, In this year, a pivotal plot was wrought.",
    "Monarchs trembled, as power shifted hands, In the hearts of the people, liberty stands. A year of change, where the old ways declined, Fraternity and equality ceased to stay behind. Can you name the year, etched in time's mind?",
    "Well, it talks about an important event in French history, but the message is so jumbled it makes no sense. I think we have to find what that certain event was."
  ];
  return (
    <div>
      <Layout text={text} speed={50} lvl={"4-1"} />
    </div>
  );
};

export default Prelevel4;