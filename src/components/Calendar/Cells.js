import React, { useState } from "react";
import DayPlanner from "./DayPlanner";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  isSameMonth,
  isSameDay,
  parse,
  addDays,
  addHours
} from "date-fns";

const Cells = props => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [modal, setModal] = useState(false);

  const toggle = () =>{
    console.log(addHours(selectedDate, 1))
    setModal(!modal)};

  const monthStart = startOfMonth(props.currDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const dateFormat = "d";
  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = "";
  let hours = selectedDate
  const onDateClick = day => {
    setSelectedDate(day);
  };
  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, dateFormat);
      const cloneDay = day;
      days.push(
        <div
          className={`column cell ${
            !isSameMonth(day, monthStart)
              ? "disabled"
              : isSameDay(day, selectedDate)
              ? "selected"
              : ""
          }`}
          key={day}
          onClick={() => {
            onDateClick(parse("", "", cloneDay));
            toggle();
          }}
        >
        
          <span className="number">{formattedDate}</span>
          <span className="bg">{formattedDate}</span>
        </div>
      );
      day = addDays(day, 1);
      
    }
    rows.push(
      <div className="row" key={day}>
        {" "}
        {days} 
        <DayPlanner toggler={toggle} modals={modal}  date = {format(selectedDate, 'MMMM d yyyy ')} time = {selectedDate}/>

      </div>
    );
    days = [];
  }

  return <div className="body">{rows}
  
  </div>;
};

export default Cells;
