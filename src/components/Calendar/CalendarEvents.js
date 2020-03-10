import React from 'react'
//change props display make better card
const CalendarEvents = (props) => {
    console.log('props', props)
    return (
        <div>
        <h1>Event Name:{props.event.first_name}</h1>   
        <p> Event summary / Description</p> 
        <p>Locaton</p>
        <p>start</p>
        <p>End</p>
        </div>
    )
}

export default CalendarEvents
