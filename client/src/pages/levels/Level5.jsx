import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";
import LockIcon from "@mui/icons-material/Lock";
import background from "../../assets/images/tm.jpg";
import styles from "./Level5.module.css";

const Level5 = () => {
  const navigate = useNavigate();
  return (
    <div
      style={
        {
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "cover",
        }
      }
    >
      <Layout
        level={5}
        name="Team Gods"
        time="00:00:00"
        score="69420"
        backgroundPicURL={background}
        colors={{
          textColor: "#fce35d",
          boxBackgroundColor: "#04364A",
          leaderboardHeaderColor: "#fce35d",
          iconColor: "#fce35d",
          leaderboardPositionColor: "#CCD3CA",
          hintTextColor: "#fce35d",
          leaderboardColor: "#04364A",
          leaderboardTextColor: "black",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "fit-content",
            padding: "2rem",
            marginLeft: "auto",
            marginTop: "6.5rem",
            backgroundColor: "#475c79",
            borderRight: "none",
            boxShadow: "0px 0px 10px 2px #000",
            position: "relative",
          }}
        >
          <div className={styles.locked}>
            <p>Time Machine Is Locked</p>
            <LockIcon
              style={{
                fontSize: "100px",
                color: "#fce35d",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <input
              type="number"
              placeholder="Time period"
              className="placeholder:text-[#fce35d]"
              style={{
                width: "250px",
                height: "40px",
                fontSize: "20px",
                fontWeight: "bold",
                padding: "0 10px",
                backgroundColor: "#000",
                color: "#fce35d",
                textAlign: "center",
              }}
            />
            <input
              type="text"
              placeholder="Destination"
              className="placeholder:text-[#fce35d]"
              style={{
                width: "250px",
                height: "40px",
                fontSize: "20px",
                fontWeight: "bold",
                padding: "0 10px",
                backgroundColor: "#000",
                color: "#fce35d",
                textAlign: "center",
              }}
            />
            <button
              onClick={() => navigate("/levels/prelevel6")}
              className={styles.travelbtn}
            >
              Travel to Destination
            </button>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Level5;
