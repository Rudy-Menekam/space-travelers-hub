/* eslint-disable no-param-reassign */
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles/mission.module.css';
import { joinMission } from '../reduxState/missionSlice';

function Missions() {
  const { missions, status } = useSelector((store) => store.missions);
  const dispatch = useDispatch();

  function displayJoinMission(currentState) {
    return currentState ? 'Leave Mission' : 'Join Mission';
  }
  const handleJoinMission = (id) => dispatch(joinMission(id));
  if (status === 'loading') {
    return <h3 className={styles.loading}>Loading Missions...</h3>;
  }
  return (
    <div className={styles.missions}>
      <div className={styles.header}>
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
            <button
              onClick={() => handleJoinMission(mission.mission_id)}
              type="button"
              className={
                mission.reserved
                  ? styles.leaveMissionBtn
                  : styles.joinMissionBtn
              }
            >
              {displayJoinMission(mission.reserved)}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Missions;
