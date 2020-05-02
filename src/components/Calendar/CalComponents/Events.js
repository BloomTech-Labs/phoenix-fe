import React from 'react';
import moment from 'moment';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Events extends React.Component {
    render() {
      const currentSelectedDay = this.props.selectedDay;
      const monthEvents = this.props.selectedMonthEvents;
      const removeEvent = this.props.removeEvent;
    
      let rendTemp = moment(monthEvents)
  
      const monthEventsRendered = rendTemp._i.map((event, i) => {
        let events = moment(event)
        return (
         
          <div
            key={events.event_id}
            className="event-container"
            onClick={() => removeEvent(i)}
          >
            <ReactCSSTransitionGroup
              component="div"
              className="animated-time"
              transitionName="time"
              transitionAppear={true}
              transitionAppearTimeout={500}
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}
            >
              <div className="event-time event-attribute">
                {event.start_time}
              </div>
            </ReactCSSTransitionGroup>
            <ReactCSSTransitionGroup
              component="div"
              className="animated-title"
              transitionName="title"
              transitionAppear={true}
              transitionAppearTimeout={500}
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}
            >
              <div className="event-title event-attribute">Summary: {event.summary}, Description: {event.description}</div>
            </ReactCSSTransitionGroup>
          </div>
        );
      });
  
      const dayEventsRendered = [];
      for (var i = 0; i < monthEventsRendered.length; i++) {
        if (moment(monthEvents[i].start_date).isSame(currentSelectedDay, "day")) {
          dayEventsRendered.push(monthEventsRendered[i]);
        }
      }
     
      return (
        <div className="day-events">
          {dayEventsRendered}
        </div>
      );
    }
  }
  