import React, {useState, useEffect} from 'react'
import Calendar from 'react-calendar'
import moment from "moment";
import './Calendar.css';


const CalendarFull = (props) => {
    const [date, setDate] = useState(new Date())
    const onchange = () => {
        setDate(date)
    }
    return (
        <div>
            <Calendar
            
            onchange={onchange}
            value={date}
            
        />
        {/* {date.toString()} 
        /\ shows current date as a string */}
        </div>
    )
}

export default CalendarFull
