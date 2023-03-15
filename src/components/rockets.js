import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRocket } from '../reduxState/rockets/rocketSlice';

function Rockets({ rocket }) {
  const {
    id,
    rocket_name,
    description,
    flickr_images,
  } = rocket;
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);

  useEffect(() => {
    dispatch(fetchRocket());
  }, []);
  return (
    <>
      {rockets.map((rocket) => (
        <div className="content">
          <img src={flickr_images} alt="mail" />
          <div className="description">
            <h1>{rocket_name}</h1>
            <p>
              {description}
            </p>
            <button
              type="submit"
              value="Reserve Rocket"
              className="button"
              onClick={() => {
                // dispatch(reserveRocket(id));
              }}
            >
              Reserve Rocket
            </button>
          </div>
        </div>
      ))}
      ,
    </>
  );
}
Rockets.propTypes = {
  rocket: PropTypes.shape({
    rocket_name: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string,
    flickr_images: PropTypes.string,
  }).isRequired,
};

export default Rockets;
