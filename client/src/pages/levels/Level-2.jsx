import * as React from 'react'
import Layout from './Layout'
import background from '../../assets/images/egypt.jpg'
const Egypt = () => {
  return (
    <div
      style={{
        background: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Layout
        level={2}
        name="Team Gods"
        time="00:00:00"
        score="69420"
        colors={{
          textColor: '#3b2a1a',
          boxBackgroundColor: '#c3a07790',
          leaderboardHeaderColor: 'black',
          iconColor: 'white',
          leaderboardPositionColor: 'brown',
          timerColor: 'white',
          timeRemainingColor: '#f2ceac',
        }}
      ></Layout>
    </div>
  )
}

// const Egypt = () => {
//   const level = styles.level + ' ' + styles.infoBox
//   const score = styles.score + ' ' + styles.infoBox
//   const infoTime = styles.infoBox + ' ' + styles.timeRemaining
//   const teamName = styles.infoBox + ' ' + styles.teamName
//   return (
//     <div className={styles.outer}>
//       <section className={styles.upperSection}>
//         <div className={level}>LEVEL 22</div>
//         <div className={score}>
//           <span>Score:</span> <article>69420</article>
//         </div>
//       </section>
//       <section className={styles.mainContent}>
//         <div className={styles.random}>
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, est?
//           Dolore, dolores. Incidunt doloremque ullam rem architecto facere
//           repellendus in alias dolorem optio reprehenderit non amet est,
//           cupiditate esse quidem dolor delectus sunt modi aliquam sint vel
//           cumque voluptatum quisquam earum? Suscipit, voluptatem? Voluptates
//           nesciunt facilis eius in animi, aperiam adipisci non molestias atque
//           tenetur accusamus asperiores sint vel quos facere cupiditate minus
//           dignissimos illo. Nisi hic inventore vero odit, sit animi asperiores
//           explicabo neque deserunt exercitationem numquam ipsa ducimus commodi?
//           Non ab nihil numquam animi, pariatur recusandae necessitatibus at quam
//           laborum quas. Perspiciatis eius et enim porro accusantium deleniti
//           iure. Natus temporibus iusto, possimus ullam accusantium est mollitia
//           ipsum omnis totam eum labore assumenda itaque numquam eveniet
//           exercitationem facere earum ea, optio deserunt repellendus quam cumque
//           architecto. Inventore nisi illo sunt natus est facilis tenetur non
//           praesentium animi nobis nesciunt sed corporis ducimus, debitis
//           consectetur saepe libero aliquam quia dolor. Omnis ipsa, quas tempore
//           culpa minima laboriosam assumenda eligendi cumque voluptas atque quasi
//           dolorem natus porro mollitia soluta sapiente possimus optio totam
//           doloribus quod numquam facere harum dolore? Ipsam voluptas reiciendis
//           placeat ex, accusantium esse laudantium itaque. Dolores ea deleniti
//           fuga repudiandae accusamus facilis quod excepturi dolorum distinctio
//           odio.
//         </div>
//       </section>
//       <section className={styles.bottomSection}>
//         <div className={infoTime}>
//           <span>Time Remaining</span>
//           00:00:00
//         </div>
//         <div className={teamName}>Team Name</div>
//         <div className={styles.features}>
//           <div>
//             <Leaderboard
//               bgColor="#C3A077"
//               textColor="white"
//               headerColor="black"
//             ></Leaderboard>
//           </div>
//           <div>
//             <Hint
//               bgColor="#C3A077"
//               textColor="white"
//               headerColor="black"
//             ></Hint>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

export default Egypt
