import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {withRouter} from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const ElseRender = (props) => {
  const classes = useStyles();
  const handleSubmit=  e => {
    e.preventDefault();
    props.history.push('/list')
  }
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Hmm, Looks like you aren't registered for anything yet. Try looking
          over some events.
          <Button size="small" onClick={handleSubmit}>Find an Event</Button>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default withRouter(ElseRender);
// 
