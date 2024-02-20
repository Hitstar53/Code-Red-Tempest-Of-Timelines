import * as React from "react";
import Layout from "./Layout";
import background from "../../assets/images/area51.jpeg";

const Level6 = () => {
  return (
    <div
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Layout
        level={6}
        name="Team Gods"
        time="00:00:00"
        score="69420"
        backgroundPicURL={background}
        colors={{
          textColor: "white",
          boxBackgroundColor: "#04364A",
          leaderboardHeaderColor: "white",
          iconColor: "white",
          leaderboardPositionColor: "#CCD3CA",
          hintTextColor: "white",
          leaderboardColor: "#04364A",
          leaderboardTextColor: "black",
        }}
      >
        <div class="search-bar">
          <input type="text" placeholder="Search..." />
          <button>
            <i class="fas fa-search"></i>
          </button>
        </div>
      </Layout>
    </div>
  );
};

export default Level6;
