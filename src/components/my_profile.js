import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { myReservedMissions } from '../reduxState/missionSlice';
import styles from './styles/myprofile.module.css';

function MyProfile() {
  const dispatch = useDispatch();
  const reservedMission = useSelector((store) => store.missions.reserved);
  const rockets = useSelector((state) => state.Rocket.rocketList);

  useEffect(() => {
    dispatch(myReservedMissions());
  }, [dispatch]);

  let renderReservedMissions = '';

  if (reservedMission.length) {
    renderReservedMissions = reservedMission.map((mision) => (
      <li key={mision.mission_id}>
        <span>{mision.mission_name}</span>
      </li>
    ));
  }

  return (
    <div className={styles.missionProfile}>
      <div className={styles.missionContainer}>
        <h1>My Missions</h1>
        <ul>{renderReservedMissions}</ul>
      </div>
      <div>
        <div className="rocket_filter">
          <h1>My Rockets</h1>
          <ul>
            {rockets.filter((rocket) => rocket.reserved === true).length > 0 ? (
              rockets
                .filter((rocket) => rocket.reserved === true)
                .map((rocket) => <li key={rocket.id}>{rocket.name}</li>)
            ) : (
              <li>No rockets have been reserved.</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
