import React from 'react';
import Day from './Day.js';
import moment from 'moment';

export default class Week extends React.Component {
    render() {
      let days = [];
      let date = this.props.previousCurrentNextView;
      let currentMonthView = this.props.currentMonthView;
      let selected = this.props.selected;
      let select = this.props.select;
      let monthEvents = this.props.monthEvents;
      let allEvents = this.props.item
      let tempEvent = moment(monthEvents)
      for (var i = 0; i < 7; i++) {
        var dayHasEvents = false;
  
        for (var j = 0; j < tempEvent.length; j++) {
          if (monthEvents[j].date.isSame(date, "day")) {
            dayHasEvents = true;
          }
        }
  
        let day = {
          name: date.format("dd").substring(0, 1),
          number: date.date(),
          isCurrentMonth: date.month() === currentMonthView.month(),
          isToday: date.isSame(new Date(), "day"),
          date: date,
          hasEvents: dayHasEvents
        };
  
        days.push(<Day day={day} selected={selected} select={select} allEvents={allEvents} />);

        date = date.clone();
        date.add(1, "d");
      }
      return (
        <div className="row week">
          {days}
        </div>
      );
    }
  }
  