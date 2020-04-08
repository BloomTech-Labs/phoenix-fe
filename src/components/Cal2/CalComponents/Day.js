import React from 'react';
import moment from 'moment'

export default class Day extends React.Component {
  
    render() {
      let day = this.props.day;
      let selected = this.props.selected;
      let select = this.props.select;
     let events = this.props.allEvents
      
      for (let i = 0; i < events.length; i++){
        let event = moment(events[i].start_date)
        
       if(day.date._d === event._d) {
         day.hasEvents= true
       }
      //  console.log('event', typeof(event._d))
      // console.log('day.date._d', day.date._d === event._d)
      }
   
      // console.log('props', this.props)
      return (
        <div
          className={
            "day" +
            (day.isToday ? " today" : "") +
            (day.isCurrentMonth ? "" : " different-month") +
            (day.date.isSame(selected) ? " selected" : "") +
            (day.hasEvents ? " has-events" : "")
          }
          onClick={() => select(day)}
        >
          <div className="day-number">{day.number}</div>
        </div>
      );
    }
  }
  