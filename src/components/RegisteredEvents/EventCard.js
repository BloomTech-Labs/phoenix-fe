import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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


const EventCard = (props) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            EVENTTITLE
          </Typography>
          <Typography variant="h5" component="h2">
            DESCRIPTION
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            STARTDATE
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">BACK TO CALENDAR</Button>
        </CardActions>
      </Card>
    )
}

export default EventCard
