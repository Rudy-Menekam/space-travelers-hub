import React from 'react';
import mail from '../image/mail.png';

function Rockets() {
  return (
    <div className="content">
      <img src={mail} alt="mail" />
      <div className="description">
        <h1>Falcon 1</h1>
        <p>
          The Rockets section displays a list of all available SpaceX rockets.
          Users can book each rocket by clicking the reservation button or cancel
          the previously made booking.
          {' '}
        </p>
        <button type="submit" value="Reserve Rocket" className="button">Reserve Rocket</button>
      </div>
    </div>
  );
}

export default Rockets;
