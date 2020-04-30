import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventCardStyle from '../../../styles/EventStyle.js';
import EventRegistration from '../../EventRegistration/EventRegistration.js';
import DetailBtn from '../../EventRegistration/DetailBtn.js';
import yawn from '../../yawn.gif';

const useStyles = EventCardStyle;

const Event = (props) => {
  const classes = useStyles();

  return (
    <Grid item xs={props.xs} sm={props.sm} md={props.md} className={classes.grid}>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="event" className={classes.avatar}>
              P
            </Avatar>
          }
          title={props.event.summary}
          subheader={props.event.location}
        />
        <CardMedia
          className={classes.media}
          image={yawn}
          title="Mr. Bean looking at a calendar"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.event.description}
          </Typography>
          <Typography component="p">{props.event.start_date}</Typography>
          <Typography component="h3">
            <span>
              {props.event.start_time} - {props.event.end_time}
            </span>
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            aria-label="see event video"
            onClick={() =>
              window.open('https://youtu.be/U9t-slLl30E', '_blank')
            }
          >
            <YouTubeIcon />
          </IconButton>
          <IconButton
            aria-label="share on Twitter"
            onClick={() =>
              window.open('https://twitter.com/compose/tweet', '_blank')
            }
          >
            <ShareIcon />
          </IconButton>
        </CardActions>
        <EventRegistration {...props} />
        <DetailBtn {...props} />
      </Card>
    </Grid>
  );
};

export default Event;
