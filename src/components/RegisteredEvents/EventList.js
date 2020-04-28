import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import Cardr from './EventCard';
import Elser from './ElseRender';
const EventList = () => {
  const [eventData, setEventData] = useState([]);
  let usetToken;

  const token1 = localStorage.getItem('token');

  function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );

    usetToken = JSON.parse(jsonPayload);

    return usetToken;
  }

  parseJwt(token1);

  const userID = usetToken.id;

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/calendar/user/${userID}`)
      .then((res) => {
        // console.log('res', res)
        setEventData(res.data);
      })
      .catch((err) => console.log('err', err));
  }, []);
  //console.log('eventData', eventData)
  console.log('userID', userID);
  const Events = [];
  for (let i = 0; i < eventData.length; i++) {
    if (eventData[i].user_id === userID) {
      Events.push(eventData[i]);
    }
  }
  console.log('Events', Events);
  return (
    <>
      {Events.length > 0 ? (
        <div>
          {Events.map((active) => (
            <Cardr id={active.event_id} active={active} />
          ))}
        </div>
      ) : (
        <Elser />
      )}{' '}
    </>
  );
};

export default EventList;
