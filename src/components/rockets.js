import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reserveRocket, fetchRocket } from '../reduxState/rockets/rocketSlice';

function Rockets() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.Rocket.status);
  const rockets = useSelector((state) => state.Rocket.rocketList);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchRocket());
    }
  }, [status, dispatch]);

  return (
    <>
      {rockets?.map((Rocket) => (
        <div className="content" key={Rocket.id}>
          <img src={Rocket.flickr_images} alt="mail" />
          <div className="description">
            <h1>{Rocket.name}</h1>
            <p>
              {Rocket.description}
            </p>
            <button
              type="submit"
              value="Reserve Rocket"
              className="button"
              onClick={() => {
                dispatch(reserveRocket(Rocket.id));
              }}
            >
              {Rocket.reserved ? ('Cancel Reservation') : ('Reserve Rocket')}
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Rockets;
