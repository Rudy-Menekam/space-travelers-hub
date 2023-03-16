import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
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
              <Badge
                bg={Rocket.reserved ? ('info') : ('secondary')}
              >
                {Rocket.reserved ? ('Reserved') : ('')}
              </Badge>
              {/* <span className="Badge">{Rocket.reserved ? ('Reserved') : ('')}</span> */}
              {Rocket.description}
            </p>
            <Button
              type="submit"
              value="Reserve Rocket"
              variant={Rocket.reserved ? ('outline-secondary') : ('btn btn-primary')}
              size="md"
              className="button"
              onClick={() => {
                dispatch(reserveRocket(Rocket.id));
              }}
            >
              {Rocket.reserved ? ('Cancel Reservation') : ('Reserve Rocket')}
            </Button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Rockets;
