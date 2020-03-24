import React, { useState } from "react";
import { format, addMonths, subMonths } from "date-fns";

const CalHeader = props => {
  const dateFormat = "MMMM yyyy";

  const nextMonth = () => {
    props.setCurrDate(addMonths(props.currDate, 1));
  };
  const prevMonth = () => {
    props.setCurrDate(subMonths(props.currDate, 1));
  };
  return (
    <div className="calheader row flex-middle">
      <div className="column col-start">
        <div className="icon" onClick={prevMonth}>
          chevron_left
        </div>
      </div>
      <div className="column col-center">
        <span>{format(props.currDate, dateFormat)}</span>
      </div>
      <div className="column col-end">
        <div className="icon" onClick={nextMonth}>
          chevron_right
        </div>
      </div>
    </div>
  );
};

export default CalHeader;