import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Layout.module.css";

const Layout = (props) => {
  const navigate = useNavigate();
  const [text, setText] = useState(props.text);
  const speed = props.speed;
  var index = 0;
  var textPos = 0;
  var length = text[0].length;
  var contents = "";
  const rePlay = () => {
    textPos = 0;
    if (index >= text.length - 1) {
      window.location.reload();
    }
    typewriter();
    dontShowButtons();
  };
  const nextText = () => {
    textPos = 0;
    index++;
    if (index !== text.length) {
      length = text[index].length;
      dontShowButtons();
      typewriter();
    }
    if (index >= text.length - 1) {
      navigate(`/levels/level${props.lvl}`);
    }
  };
  const typewriter = () => {
    contents = " ";
    var destination = document.querySelector("#typedtext");
    destination.innerHTML = contents + text[index].substring(0, textPos);
    if (textPos++ == length) {
      setTimeout(showButtons, 1000);
    } else {
      setTimeout(typewriter, speed);
    }
  };
  const showButtons = () => {
    document.querySelector("#buttons").style.display = "flex";
  };
  const dontShowButtons = () => {
    document.querySelector("#buttons").style.display = "none";
  };
  window.onload = typewriter;
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.image}>
          <p className={styles.caption}>Agent C</p>
        </div>
        <div className={styles.textBox}>
          <div className={styles.typedtext} id="typedtext"></div>
          <div className={styles.buttons} id="buttons">
            <button className={styles.replay} onClick={rePlay}>
              <i className="material-symbols-outlined">replay</i> Replay
            </button>
            <button className={styles.next} onClick={nextText}>
              Next<i className="material-symbols-outlined">
                navigate_next</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
