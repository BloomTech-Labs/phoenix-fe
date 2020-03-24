import React, { useState } from "react";
import { format, addDays, startOfWeek } from "date-fns";

const DaysOfWeek = (props) => {
  const dateFormat = "EEE";
  const days = [];
  let startDate = startOfWeek(props.currDate);
  for (let i = 0; i < 7; i++) {
    days.push(
      <div className="column col-center" key={i}>
        {format(addDays(startDate, i), dateFormat)}
      </div>
    );
  }
  return <div className="days row">{days}</div>;
};

export default DaysOfWeek;
