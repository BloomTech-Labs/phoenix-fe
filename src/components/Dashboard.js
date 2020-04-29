import React from 'react'
import Calendar from './Calendar/Calen.js';
import EventList from './RegisteredEvents/EventList.js';
import DashboardStyles from '../styles/dashboardstyle.js';

const Dashboard = () => {
    const dashStyles = DashboardStyles;
    const classes = dashStyles();

    return (
        <div className={classes.dashboard}>
        <div className={classes.eventlist}>
            <EventList  />
        </div>
        <div className={classes.dashcal}>
            <Calendar/>
        </div>         
        <div className={classes.chat}></div> 
            Chat is Coming soon!  
        </div>
    )
}

export default Dashboard;