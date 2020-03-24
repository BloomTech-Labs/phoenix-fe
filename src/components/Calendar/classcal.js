import React from "react";
import  * as dateFns  from 'date-fns'
import './CalendarF.css'

export default class Calendar extends React.Component {
  state = {
    currentMonth: new Date(),
    selectedDate: new Date()
  };
  
  renderHeader() {
    const dateFormat = "MMMM yy";

    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span>{dateFns.format(this.state.currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  }

  renderDays() {
    const dateFormat = "E";
    const days = [];

    let startDate = dateFns.startOfWeek(this.state.currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="days row">{days}</div>;
  }

  renderCells() {
    const { currentMonth, selectedDate } = this.state;
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);
    const selectedFormat = 'd MM YY a..aaa X'
    
    
    const dateFormat = "d";
    const rows = [];
    console.log('startDate', startDate)
    let days = [];
    let day = startDate;
    let formattedDate = "";
   
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        
     
        formattedDate = dateFns.format(day, dateFormat);
        days.push(
          <div
            className={`col cell`}
            key={day}
            onClick={() => this.onDateClick(days[i])}
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
          </div>
        );
        day = dateFns.addDays(day, 1);
      }
      console.log('days', days)
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      
      );
      days = [];
     
      }
 
    
    return <div className="body">{rows}</div>;
  }
  onDateClick = day => {
      console.log('day', day)
    this.setState({
      selectedDate: day
    });
  };

  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    });
  };

  render() {
    
    return (
      <div className="calendar">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
        </div>
    )
  }
}