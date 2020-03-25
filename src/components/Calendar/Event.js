import React from 'react'

export const Event = (props) => {
    return (
        <div>
            <p>{props.data.summary}</p>
             <p>{props.data.description}</p>
    <p>{props.data.start_date}</p>
    <span>{props.data.start_time} - {props.data.end_time}</span>
        </div>
    )
}
