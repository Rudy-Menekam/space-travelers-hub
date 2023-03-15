import React from 'react';
import styles from './styles/missionDisplay.module.css';

const DisplayMission = () => (
  <div className={styles.missionItems}>
    <div className={styles.missionHead}>
      <h3>Lorem</h3>
    </div>
    <div className={styles.missionInfo}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis leo
        elit, a cursus mauris scelerisque in. Maecenas at orci lobortis, feugiat
        leo at, consequat libero. Donec tincidunt hendrerit mauris vitae auctor.
        Curabitur nec lectus non eros malesuada pharetra nec sit amet elit.
        Donec est nisl, feugiat vitae nibh et, eleifend sodales nulla. Nullam
        nec gravida nibh. Quisque auctor turpis in mi semper congue.
      </p>
    </div>
    <div className={styles.buttons}>
      <button type="button" className={styles.memberBtn}>
        NOT A MEMBER
      </button>
    </div>
    <div className={styles.buttons}>
      <button type="button" className={styles.joinMissionBtn}>
        Join Mission
      </button>
    </div>
  </div>
);

export default DisplayMission;
