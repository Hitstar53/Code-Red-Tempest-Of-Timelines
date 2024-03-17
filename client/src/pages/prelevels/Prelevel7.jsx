import React from "react";
import Layout from "./Layout";

const Prelevel7 = () => {
  const text = [
    "I am impressed you got that one! I don't think I would have been able to do such a fine job myself! We are nearly there. As you already know, the next challenge is in North Korea in 2030 CE. We have to move fast because I already sense the temporal continuum starting to unsettle yet again.",
    "Kim Jong Un has been tipped from his inner circle that he is going to be assassinated. That’s why he is on a covert security journey across different cities of North Korea. We need to download the report which contains all the destinations and assassinate him at the final destination. But Andwyn’s already here to prevent the assassination, so we have to move fast.",
  ];
  return (
    <div>
      <Layout text={text} speed={70} lvl={7} />
    </div>
  );
};

export default Prelevel7;