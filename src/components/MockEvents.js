import React, { useState, useEffect } from "react";
import MockEventStyles from '../styles/MockEventsStyles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import axios from 'axios';



export default function MockEvents(){ 
  const useStyles = MockEventStyles;
  const [ event, setEvent ] = useState([]);
  const classes = useStyles();

  useEffect(()=> {
    axios
    .get('https://phoenix-be-staging.herokuapp.com/api/calendar')
    .then( res => {
      setEvent({
    events: res.data
  })
    })
    .catch(err => {
      console.log(err.res)
  })
  }, [setEvent])

    
    return(
       <div className={classes.root}>
           <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Event 1</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Event 2</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Event 3</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            This is the 3rd event I will make it dynamic. 
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

       </div> 
    )
};