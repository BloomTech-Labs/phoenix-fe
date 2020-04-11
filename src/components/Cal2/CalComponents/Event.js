import React from 'react'
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
import EReg from '../../EReg/EReg.js';


const useStyles = EventCardStyle;

const Event = (props) => {
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={6} md={4} className={classes.grid}>
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
                    image={"https://media.giphy.com/media/gfTPmNCC7PKHevwp25/giphy-downsized-large.gif"}
                    title="Mr. Bean looking at a calendar"
                />
             <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.event.description}
                </Typography>
                <Typography component="p">
                    {props.event.start_date}
                </Typography>
            <Typography component="h3">
                <span>{props.event.start_time} - {props.event.end_time}</span>
            </Typography>
            </CardContent>
            <CardActions disableSpacing>
                    <IconButton aria-label="see event video" onClick={()=> window.open("https://youtu.be/U9t-slLl30E", '_blank')}>
                    <YouTubeIcon/>
                    </IconButton>
                    <IconButton aria-label="share on Twitter" onClick={()=> window.open('https://twitter.com/compose/tweet', '_blank')}>
                    <ShareIcon />
                    </IconButton>
            </CardActions>
            <EReg {...props}/>
        </Card>
    </Grid>
    )
}

export default Event