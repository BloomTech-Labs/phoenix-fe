import React from 'react';
import Day from './Day.js';
import moment from 'moment';

export default class Week extends React.Component {
    render() {
      let days = [];
      let specificMonthEvents = [];
      let date = this.props.previousCurrentNextView;
      let currentMonthView = this.props.currentMonthView;
      let selected = this.props.selected;
      let select = this.props.select;
      let monthEvents = this.props.monthEvents;
      

      for (var i = 0; i < 7; i++) {
        var dayHasEvents = false;
  
        for (var j = 0; j < monthEvents.length; j++) {

          if (moment(monthEvents[j].start_date).isSame(date, "day")) {
            specificMonthEvents.push(monthEvents[j])
            dayHasEvents = true;
          }
        }

  
        let day = {
          name: date.format("dd").substring(0, 1),
          number: date.date(),
          specificMonthEvents: specificMonthEvents,
          isCurrentMonth: date.month() === currentMonthView.month(),
          isToday: date.isSame(new Date(), "day"),
          date: date,
          hasEvents: dayHasEvents
        };
  
        days.push(<Day day={day} selected={selected} select={select}/>);

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
  