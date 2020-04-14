import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

// import NavbarStyle from '../styles/NavbarStyles.js';

// const useStyles = NavbarStyle;

const EventPage = (props) => {
  const [string, setString] = useState('');
  const [result, setRes] = useState([]);
  const [time, setTime] = useState({
    startTime: '',
    endTime: '',
    startDate: '',
    endDate: '',
  });
  const eventID = Number(props.match.params.id);

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
          return item.event_id === eventID;
        })[0];
        setTimeout(console.log('event:', event), 2000);

        setRes(event);
        console.log('taimu', event.end_time);

        //convert time
        let shorty = Number(event.end_time.substr(0, 2));
        let shorty30 = Number(event.end_time.substr(4, 6));
        let endT;
        if (shorty > 12) {
          endT = `${shorty - 12}:${shorty30} PM`;
        }
        if (shorty === 12) {
          endT = `${shorty}: ${shorty30} PM`;
        } else {
          endT = `${shorty}: ${shorty30} AM`;
        }
        setTime({ endTime: endT });
        // convert date
        let start = event.start_date;
        let startD = new Date(start);
        let end = event.end_date;
        let endD = new Date(end);
      })
      .then((_) => setString(''))
      .catch((err) => console.log('Problem retrieving events', 'Error: ', err));

    // result.eventtime do something

    if (result.start_time > '12:00:00') {
      let startO = result.start_time - 12 + 'pm';
      setTime({ startTime: startO });
    }
    // if time > 12, subtract 12 and add PM
    // else add AM
    // date rearrange
    // save as new variable
  }, [eventID]);

  return (
    <>
      <h2>{result.summary}</h2>
      <p>{result.description}</p>
      <p>Location: {result.location}</p>
      <p>
        Starts: {time.startDate} {time.startTime}
      </p>
      <p>
        Ends: {time.endDate} {time.endTime}
      </p>
    </>
  );
};
export default withRouter(EventPage);
