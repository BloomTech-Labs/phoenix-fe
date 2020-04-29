import React from "react";
import MockEventStyles from '../../../styles/MockEventsStyles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
// import Wine from '../../../images/carousel1blurrparty'
// import Marathn from '../../../images/carousel2marathon'
// import Museum from '../../../images/carousel3couplepark'


export default function MockEvents(){ 
  const useStyles = MockEventStyles;
  const classes = useStyles();
  const data = [
        {img: {}, title: "Wine And Beer Aficionados", content: "Whether you are new to wine tasting or beer sampling or a long time connoisseur, please join us for a fun filled night of connecting with new friends or reuniting with past friends sampling local varieties and enjoying a live local band. "},
        {img: {}, title: "Marathon And New Runner Enthusiasts", content: "Whether you are new to marathons or running as a sport or a long time member, please join us for a fun filled night of connecting with new friends or reuniting with past friends sampling nutrition supplements, trying out new training equipment."},
        {img: {},title: "Movies, Parks, Museums, OH MY!", content: "Whether you are new to attending Movie Premiers, Specialty Parks or Museums  or you are a long time fan, please join us for a fun filled night. Connect with new friends or reunite with past friends by watching new movie trailers, video tours of the best parks and museums while enjoying light  snacks and beverages."}
    ]  
    return(
       <div className={classes.root}>
           {data.map(i => (
        <ExpansionPanel>
            <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header">
                {/* Media MUI for image */}
                 <Typography className={classes.heading}>{i.title}</Typography>
            </ExpansionPanelSummary>
                 <ExpansionPanelDetails>
                    <Typography>{i.content} 
           <Button  variant="outlined" href="/events" >
            More about the event here</Button>
          </Typography>
          <div></div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
           ))}
       
      

       </div> 
    )
};