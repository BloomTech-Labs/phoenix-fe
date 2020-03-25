import React, { cloneElement } from 'react'

const Event = (props) => {
    console.log('props', props)
    return (
        <div>
               <p>{props.event.summary}</p>
             <p>{props.event.description}</p>
    <p>{props.event.start_date}</p>
    <span>{props.event.start_time} - {props.event.end_time}</span>
        </div>
    )
}

export default Event
