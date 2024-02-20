import * as React from "react";
import Layout from "./Layout";
import background from "../../assets/images/egypt.jpg";
import "./Level2.css";

const Level2 = () => {
  return (
    <div
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Layout
        level={2}
        name="Team Gods"
        time="00:00:00"
        score="69420"
        backgroundPicURL={background}
        colors={{
          textColor: "#3b2a1a",
          boxBackgroundColor: "#c3a077",
          leaderboardHeaderColor: "black",
          iconColor: "white",
          leaderboardPositionColor: "#CCD3CA",
          hintTextColor: "white",
          leaderboardColor: "#c3a077",
          leaderboardTextColor: "black",
        }}
      >
        <div class="login-form">
          {/* <h1>Glass</h1> */}
          <form action="#" className="login-form-container">
            <input type="text" placeholder="Enter Co-ordinates" />
            <input type="password" placeholder="Enter Year" />
            <button type="submit">Login</button>
          </form>
        </div>
      </Layout>
    </div>
  );
};

export default Level2;
