import React from 'react';
import styles from './styles/mission.module.css';

function Missions() {
  return (
    <div className={styles.missionsContainer}>
      <div className={styles.missionsHeader}>
        <div>
          <p>Mission</p>
        </div>
        <div>
          <p>Description</p>
        </div>
        <div>
          <p>Status</p>
        </div>
        <div />
      </div>
    </div>
  );
}

export default Missions;
