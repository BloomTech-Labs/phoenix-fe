import React from 'react';
import moment from 'moment';
import './Calen.css';
import axios from 'axios';
import Week from './CalComponents/Week.js';
import DayNames from './CalComponents/DayNames.js';
import Events from './CalComponents/Events.js';
import { RenderTodayLabel, RenderDayLabel, RenderMonthLabel } from './CalFuncs.js';

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedMonth: moment(),
      selectedDay: moment().startOf("day"),
      selectedMonthEvents: [],
      showEvents: false,
      events: []
    };

    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
    this.addEvent = this.addEvent.bind(this);
    this.showCalendar = this.showCalendar.bind(this);
    this.goToCurrentMonthView = this.goToCurrentMonthView.bind(this);

  }

  previous() {
    const currentMonthView = this.state.selectedMonth;

    this.setState({
      selectedMonth: currentMonthView.subtract(1, "month")
    });
  }

  next() {
    const currentMonthView = this.state.selectedMonth;
    this.setState({
      selectedMonth: currentMonthView.add(1, "month")
    });
  }

  select(day) {
    this.setState({
      selectedMonth: day.date,
      selectedDay: day.date.clone(),
      showEvents: true
    });
  }

  goToCurrentMonthView(){
    this.setState({
      selectedMonth: moment()
    });
  }
  
  showCalendar() {
    this.setState({
      selectedMonth: this.state.selectedMonth,
      selectedDay: this.state.selectedDay,
      showEvents: false
    });
  }

  renderWeeks() {
    const currentMonthView = this.state.selectedMonth;
    const currentSelectedDay = this.state.selectedDay;
    const monthEvents = this.state.selectedMonthEvents;

    let weeks = [];
    let done = false;
    let previousCurrentNextView = currentMonthView
      .clone()
      .startOf("month")
      .subtract(1, "d")
      .day("Monday");
    let count = 0;
    let monthIndex = previousCurrentNextView.month();

    while (!done) {
      weeks.push(
        <Week
          previousCurrentNextView={previousCurrentNextView.clone()}
          currentMonthView={currentMonthView}
          monthEvents={monthEvents}
          selected={currentSelectedDay}
          select={day => this.select(day)}
        />
      );
      previousCurrentNextView.add(1, "w");
      done = count++ > 2 && monthIndex !== previousCurrentNextView.month();
      monthIndex = previousCurrentNextView.month();
    }
    return weeks;
  }

  handleAdd() {
    const monthEvents = this.state.selectedMonthEvents;
    const currentSelectedDate = this.state.selectedDay;

    let newEvents = [];

    var eventTitle = prompt("Please enter a name for your event: ");

    switch (eventTitle) {
      case "":
        alert("Event name cannot be empty.");
        break;
      case null:
        alert("Changed your mind? You can add one later!");
        break;
      default:
        var newEvent = {
          summary: eventTitle,
        //   description: eventDescription,
        //   location: eventLocation,
          startDate: '',
          date: currentSelectedDate,
          dynamic: true
        };

        newEvents.push(newEvent);

        for (var i = 0; i < newEvents.length; i++) {
          monthEvents.push(newEvents[i]);
        }

        this.setState({
          selectedMonthEvents: monthEvents
        });
        break;
    }
  }

  addEvent() {
    const currentSelectedDate = this.state.selectedDay;
    let isAfterDay = moment().startOf("day").subtract(1, "d");

    if (currentSelectedDate.isAfter(isAfterDay)) {
      this.handleAdd();
    } else {
      if (window.confirm("Are you sure you want to add an event in the past?")) {
        this.handleAdd();
      } else {
        // TODO: else...
      }
    }
  }

  removeEvent(i) {
    const monthEvents = this.state.selectedMonthEvents.slice();
    
    if (window.confirm("Are you sure you want to remove this event?")) {
      let index = i;

      if (index !== -1) {
        monthEvents.splice(index, 1);
      } else {
        alert("No events to remove on this day!");
      }

      this.setState({
        selectedMonthEvents: monthEvents
      });
    }
  }

componentDidMount(){
  axios
  .get('https://phoenix-be-staging.herokuapp.com/api/calendar')
  .then(res => {
        this.setState({
          events: res.data,
          
    })
  }).then(res => {
        const monthEvents = this.initialiseEvents()
        return monthEvents
      }).then(res => {
        const monthEvents = res
        this.setState({
          selectedMonthEvents:monthEvents
        })
      })

  .catch(err => console.log('axios err', err))
}

initialiseEvents() {
  const monthEvents = this.state.selectedMonthEvents;

  let allEvents = this.state.events;

  for (var i = 0; i < allEvents.length; i++) {

    allEvents[i].hasEvents = true
    monthEvents.push(allEvents[i]);
  }
  return monthEvents
}

  render() {
    const showEvents = this.state.showEvents;
  
    if (showEvents) {
      return (
        <section className="main-calendar content">
          <header className="calendar-header">
            <div className="row title-header">
              <RenderDayLabel selectedDay={this.state.selectedDay}/>
            </div>
            <div className="row button-container" >
                <span className="box arrow" onClick={this.showCalendar}>
                  <i className="fa fa-angle-left"/>
                </span>
                <span className="box event-button" onClick={this.addEvent}>
                  <i className="fa fa-plus-square"/>
                </span>
            </div>
          </header>
          
          <Events
            selectedMonth={this.state.selectedMonth}
            selectedDay={this.state.selectedDay}
            selectedMonthEvents={this.state.selectedMonthEvents}
            removeEvent={i => this.removeEvent(i)}
          />
        </section>
      );
    } else {
      return (
        <section className="main-calendar">
          <header className="calendar-header">
            <div className="row title-header">
              <div className="month-arrow" onClick={this.previous}>
                <i className="box arrow fa fa-angle-left"/>
              </div>
              <div className="box header-text">
              <RenderTodayLabel goToCurrentMonthView={this.goToCurrentMonthView}/>
              <RenderMonthLabel selectedMonth={this.state.selectedMonth}/>
              </div>
              <div className="month-arrow" onClick={this.next}>
                <i className="box arrow fa fa-angle-right"/>
              </div>
            </div>
            <DayNames />
          </header>
          <div className="days-container">
            {this.renderWeeks()}
          </div>
        </section>
      );
    }
  }
}
