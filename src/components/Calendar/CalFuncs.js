import React from 'react';

export function RenderMonthLabel(props) {
    const currentMonthView = props.selectedMonth;
    return (
      <span className="box month-label">
        {currentMonthView.format("MMMM YYYY")}
      </span>
    );
  }

export function RenderDayLabel(props) {
    const currentSelectedDay = props.selectedDay;
    return (
      <span className="box month-label">
        {currentSelectedDay.format("DD MMMM YYYY")}
      </span>
    );
  }

export function RenderTodayLabel(props) {

    return (
      <span className="box today-label" onClick={props.goToCurrentMonthView}>
        Today
      </span>
    );
  }
  