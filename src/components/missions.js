/* eslint-disable no-param-reassign */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles/mission.module.css';
import { getMission } from '../reduxState/missionSlice';

function Missions() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);

  useEffect(() => {
    dispatch(getMission());
  }, [dispatch]);

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
      {missions.map((mission) => (
        <div className={styles.missionItems} key={mission.mission_id}>
          <div className={styles.missionHead}>
            <h3>{mission.mission_name}</h3>
          </div>
          <div className={styles.missionInfo}>
            <p>{mission.description}</p>
          </div>
          <div className={styles.buttons}>
            {mission.reserved ? (
              <button type="button" className={styles.activeMemberBtn}>
                Active Member
              </button>
            ) : (
              <button type="button" className={styles.memberBtn}>
                NOT A MEMBER
              </button>
            )}
          </div>
          <div className={styles.buttons}>
            <button type="button" className={styles.joinMissionBtn}>
              Join Mission
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Missions;
