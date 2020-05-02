import React from "react";
import MockEventStyles from '../styles/MockEventsStyles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';


export default function MockEvents(){ 
  const useStyles = MockEventStyles;
  const classes = useStyles();
      
    return(
       <div className={classes.root}>
       
           <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Wine And Beer Aficionados</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
           Whether you are new to wine tasting or beer sampling or a long time connoisseur, please join us for a fun filled night of connecting with new friends or reuniting with past friends sampling local varieties and enjoying a live local band. 
           <Button  variant="outlined" href="/events" >
  More about the event here 
  </Button>
          </Typography>
          <div>
         
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Marathon And New Runner Enthusiasts</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          Whether you are new to marathons or running as a sport or a long time member, please join us for a fun filled night of connecting with new friends or reuniting with past friends sampling nutrition supplements, trying out new training equipment.
          <Button  variant="outlined" href="/events" >
  More about the event here 
  </Button>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Movies, Parks, Museums, OH MY!</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          Whether you are new to attending Movie Premiers, Specialty Parks or Museums  or you are a long time fan, please join us for a fun filled night. Connect with new friends or reunite with past friends by watching new movie trailers, video tours of the best parks and museums while enjoying light  snacks and beverages. 
          <Button variant="outlined" href="/events" >
  More about the event here 
  </Button>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

       </div> 
    )
};