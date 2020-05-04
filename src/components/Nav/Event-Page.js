import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import EventPageStyle from '../../styles/EventPageStyles';
import { Card, CardContent, Typography } from '@material-ui/core';

const useStyles = EventPageStyle;

const EventPage = (props) => {
  const classes = useStyles();
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
        let startHour = Number(event.start_time.substr(0, 2));
        let startMin = event.start_time.substr(3, 2);

        let startT;
        if (startHour < 12) {
          startT = `${startHour}:${startMin} AM`;
        }
        if (startHour > 12) {
          startT = `${(startHour -= 12)}:${startMin} PM`;
        }
        if (startHour === 12) {
          startT = `${startHour}:${startMin} PM`;
        }

        // convert end time
        let endHour = Number(event.end_time.substr(0, 2));
        let endMin = event.end_time.substr(3, 2);

        let endT;
        if (endHour < 12) {
          endT = `${endHour}:${endMin} AM`;
        }
        if (endHour > 12) {
          endT = `${(endHour -= 12)}:${endMin} PM`;
        }
        if (endHour === 12) {
          endT = `${endHour}:${endMin} PM`;
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
  }, [eventID, result.start_time, string]);

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
      <Typography variant="h3" component="h2">{result.summary}</Typography>
      <Typography variant="h5">{result.description}</Typography>
      <Typography variant="h6">Location: {result.location}</Typography>
      <Typography variant="h6">
        Starts: {time.startDate} {time.startTime}
      </Typography>
      <Typography variant="h6">
        Ends: {time.endDate} {time.endTime}
      </Typography>
      </CardContent>
      </Card>
    </div>
  );
};
export default withRouter(EventPage);
