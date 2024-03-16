import React from "react";
import { Link } from "react-router-dom";
import styles from "./Welcome.module.css";

const Welcome = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let interval = null;
  window.onload = () => {
    let h1 = document.querySelector("h1");
    let iteration = 0;
    clearInterval(interval);
    interval = setInterval(() => {
      h1.innerText = h1.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return h1.dataset.value[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");
      if (iteration >= h1.dataset.value.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, 80);
  };
  return (
    <div className={styles.welcomeContainer}>
      <div className={styles.openMsg}>
        <h1 className={styles.glow} data-value="CODE RED">
          CODE RED
        </h1>
      </div>
      <Link to="/login" className={styles.startBtn} id="btn">
        Start Now!
      </Link>
    </div>
  );
};

export default Welcome;
