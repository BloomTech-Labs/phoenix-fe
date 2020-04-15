import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

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

        setRes(event);

        //convert start time
        let smol = Number(event.start_time.substr(0, 2));
        let smol30 = event.start_time.substr(3, 2);

        let startT;
        if (smol < 12) {
          startT = `${smol}:${smol30} AM`;
        }
        if (smol > 12) {
          startT = `${(smol -= 12)}:${smol30} PM`;
        }
        if (smol === 12) {
          startT = `${smol}:${smol30} PM`;
        }

        // convert end time
        let shorty = Number(event.end_time.substr(0, 2));
        let shorty30 = event.end_time.substr(3, 2);

        let endT;
        if (shorty < 12) {
          endT = `${shorty}:${shorty30} AM`;
        }
        if (shorty > 12) {
          endT = `${(shorty -= 12)}:${shorty30} PM`;
        }
        if (shorty === 12) {
          endT = `${shorty}:${shorty30} PM`;
        }

        // convert date
        let start = event.start_date;
        let startD = start.substr(0, 10);
        let end = event.end_date;
        let endD = end.substr(0, 10);

        setTime({
          startTime: startT,
          endTime: endT,
          startDate: startD,
          endDate: endD,
        });
      })
      .then((_) => setString(''))
      .catch((err) => console.log('Problem retrieving events', 'Error: ', err));

    if (result.start_time > '12:00:00') {
      let startO = result.start_time - 12 + 'pm';
      setTime({ startTime: startO });
    }
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
