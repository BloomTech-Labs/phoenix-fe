import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

// import NavbarStyle from '../styles/NavbarStyles.js';

// const useStyles = NavbarStyle;

const EventPage = (props) => {
  const [string, setString] = useState('');
  const [result, setRes] = useState([]);

  const eventID = Number(props.match.params.id);

  console.log('eventID', eventID);
  console.log('props', props);

  useEffect(() => {
    axios
      .get(`https://phoenix-be-staging.herokuapp.com/api/calendar/`)
      .then(async (res) => {
        let results = await res.data.filter((item) => {
          return item.summary
            .toLowerCase()
            .includes(string.toLocaleLowerCase());
        });

        let event = await results.filter((item) => {
          return item.event_id == eventID;
        })[0];
        setTimeout(console.log('event:', event), 2000);

        console.log('res:', res);

        setRes(event);

        console.log('results:', results);

        // for (let i = 0; i < results.length; i++) {
        //   results[i].start_time = new Date(
        //     results[i].start_date
        //   ).toLocaleTimeString();
        //   results[i].end_time = new Date(
        //     results[i].end_date
        //   ).toLocaleTimeString();
        //   results[i].start_date = new Date(
        //     results[i].start_date
        //   ).toDateString();
        // }
      })
      .then((_) => setString(''))
      .catch((err) => console.log('Problem retrieving events', 'Error: ', err));
  }, [eventID]);

  return (
    <>
      <div>hey it's the event page</div>
    </>
  );
};
export default withRouter(EventPage);
