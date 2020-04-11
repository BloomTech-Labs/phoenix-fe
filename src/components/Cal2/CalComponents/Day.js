import React from 'react';
import moment from 'moment';
export default class Day extends React.Component {
  
    render() {
      let day = this.props.day;
      let selected = this.props.selected;
      let select = this.props.select;
      let spec = this.props.day.specificMonthEvents;
      var maparray = [];
      
      if (spec.length >0){
      for (let i=0; i <spec.length; i++){
      if(moment(spec[i].start_date).isSame(day.date,'date')){
        maparray = spec.map(title => {
         
          return title
        })
      }}}

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
          <div className="day-number">
          {maparray[0] ? <div className='event'> {maparray[0].summary} ++</div>: <></>}
            {day.number}
          </div>
           
        </div>
      );
    }
  }
  