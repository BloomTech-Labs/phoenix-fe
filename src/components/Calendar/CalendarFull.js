import React, { useState } from 'react'
import dateFns from "dateFns";
import './Calendar.css'

const CalendarFull = () => {
    const [date, setDate] = useState(new Date())
    const [month, setMonth] =useState(new Date())

    
    const header = ()=>{
        const dateFormat = 'MMMM YYYY'
        return (
        <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span>
            {dateFns.format(month, dateFormat)}
          </span>
        </div>
        <div className="col col-end" onClick={nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
      )
        
    }

    const days= () =>{
        const dateFormat = 'dddd'
        const days = []
        let startDate = dateFns.startOfWeek(month)
        for (let i = 0 ; i < 7; i++){
            days.push(<div className="col col-center" key={i}>
            {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
          </div>
          )
        }
        return <div className="days row">{days}</div>;
    }
    const onDateClick = day => {
        setDate({selectedDate: day})
    };
    
    const cells =() => {
        //state of date and month
        const monthStart = dateFns.startOfMonth(month);
        const monthEnd = dateFns.endOfMonth(monthStart);
        const startDate = dateFns.startOfWeek(monthStart);
        const endDate = dateFns.endOfWeek(monthEnd);

        const dateFormat = "D";
        const rows = [];
        let days = [];
        let day = startDate;
        let formattedDate = "";
        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = dateFns.format(day, dateFormat);
                const cloneDay = day;
                days.push(<div className={`col cell ${!dateFns.isSameMonth(day, monthStart) ? "disabled" : dateFns.isSameDay(day, selectedDate) ? "selected" : "" }`}
                key={day}
                    onClick={() => this.onDateClick(dateFns.parse(cloneDay))} >
                <span className="number">{formattedDate}</span>
                <span className="bg">{formattedDate}</span>
                 </div>
                 );
            day = dateFns.addDays(day, 1);
            }
        rows.push(<div className="row" key={day}>{days}</div>
        );
        days = [];
        }
     return <div className="body">{rows}</div>;
    }
  
   
  
     const nextMonth = () => {
         setMonth(dateFns.addMonths(month, 1))
     };
    const prevMonth = () => {
        setMonth(dateFns.subMonths(month, 1))
    };

    return (
        <div>
            <div>Header</div>
            <div>Days</div>
            <div>Cells</div>
        </div>
    )
}

export default CalendarFull
