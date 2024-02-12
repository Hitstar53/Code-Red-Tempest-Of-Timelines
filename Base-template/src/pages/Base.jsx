import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import styles from "./Base.module.css";

const Base = () => {
  const level = styles.level + " " + styles.infoBox;
  const score = styles.score + " " + styles.infoBox;
  const infoTime = styles.infoBox + " " + styles.timeRemaining;
  return (
    <div className={styles.outer}>
      <section className={styles.upperSection}>
        <div className={level}>LEVEL 4</div>
        <div className={score}>
          <span>Score:</span> 69420
        </div>
      </section>
      <section class={styles.mainContent}>
        <div class={styles.random}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, est?
          Dolore, dolores. Incidunt doloremque ullam rem architecto facere
          repellendus in alias dolorem optio reprehenderit non amet est,
          cupiditate esse quidem dolor delectus sunt modi aliquam sint vel
          cumque voluptatum quisquam earum? Suscipit, voluptatem? Voluptates
          nesciunt facilis eius in animi, aperiam adipisci non molestias atque
          tenetur accusamus asperiores sint vel quos facere cupiditate minus
          dignissimos illo. Nisi hic inventore vero odit, sit animi asperiores
          explicabo neque deserunt exercitationem numquam ipsa ducimus commodi?
          Non ab nihil numquam animi, pariatur recusandae necessitatibus at quam
          laborum quas. Perspiciatis eius et enim porro accusantium deleniti
          iure. Natus temporibus iusto, possimus ullam accusantium est mollitia
          ipsum omnis totam eum labore assumenda itaque numquam eveniet
          exercitationem facere earum ea, optio deserunt repellendus quam cumque
          architecto. Inventore nisi illo sunt natus est facilis tenetur non
          praesentium animi nobis nesciunt sed corporis ducimus, debitis
          consectetur saepe libero aliquam quia dolor. Omnis ipsa, quas tempore
          culpa minima laboriosam assumenda eligendi cumque voluptas atque quasi
          dolorem natus porro mollitia soluta sapiente possimus optio totam
          doloribus quod numquam facere harum dolore? Ipsam voluptas reiciendis
          placeat ex, accusantium esse laudantium itaque. Dolores ea deleniti
          fuga repudiandae accusamus facilis quod excepturi dolorum distinctio
          odio.
        </div>
      </section>
      <section className={styles.bottomSection}>
        <div class={infoTime}>
          <span>Time Remaining</span>
          00:00:00
        </div>
        <div class="info-box team-name">Team Name</div>
        <div class="features">
          <div class="icon">
            <Button variant="contained">Contained</Button>
          </div>
          <div class="icon">
            <span class="material-symbols-outlined"> lightbulb </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Base;
