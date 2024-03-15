import * as React from 'react'
import Layout from './Layout'
import background from '../../assets/images/kimjongun.jpg'

import styles from './Level7.module.css'

const Level7 = () => {
  return (
    <div
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Layout
        level={7}
        name="Team Gods"
        time="00:00:00"
        score="69420"
        backgroundPicURL={background}
        colors={{
          textColor: 'white',
          boxBackgroundColor: '#76453B',
          leaderboardHeaderColor: 'white',
          iconColor: 'white',
          leaderboardPositionColor: '#CCD3CA',
          hintTextColor: 'white',
          leaderboardColor: '#76453B',
          leaderboardTextColor: 'black',
        }}
        hintText="There is one file, there are two files, or however many there are… just observe the files and escape patterns carefully. Kim Jong Un’s final destination lies in plain sight.Also, before submitting just remember: “Are we in North Korea or are we in New Delhi?”"
      >
      <div className={styles.mapContainer}>
      <iframe
        title="North Korea Map"
        className="map-iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247001.83511170897!2d125.8878247156738!3d39.0392194675874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3578e8d97b663933%3A0x56a514e48a07a16a!2sNorth%20Korea!5e0!3m2!1sen!2sus!4v1636967776966!5m2!1sen!2sus"
        width="800"
        height="400"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
    <div style={{
              textColor: 'white',
              backgroundColor: "#76453B",
              padding: '1rem',
              borderRadius: '100vw',
              boxShadow: `0px 0px 6px 2px white`,
              zIndex: 10,
            }}>
      <a
        href="https://drive.google.com/uc?export=download&id=1e9q2w0w1V3C4g5f6h7i8j9k0l1m2n3o4"
        download
      >
        <button>Download</button>
      </a>
    </div>
      </Layout>
    </div>
  )
}

export default Level7
