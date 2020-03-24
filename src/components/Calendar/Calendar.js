import React, { useState } from "react";
import CalHeader from "./CalHeader";
import DaysOfWeek from "./DaysOfWeek";
import Cells from './Cells'
import "./calendar.css";

const Calendar = props => {
  const [currentDate, setCurrentDate] = useState(new Date());
  // const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="calendar">
      <CalHeader setCurrDate = {setCurrentDate} currDate = {currentDate} />
      <DaysOfWeek currDate = {currentDate}/>
      <Cells currDate = {currentDate} />
    </div>
  );
};

export default Calendar;
