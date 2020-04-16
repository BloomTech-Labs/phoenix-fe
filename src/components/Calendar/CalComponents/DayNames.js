import React from 'react';

export default class DayNames extends React.Component {
  render() {
    return (
      <div className="row days-header">
        <span className="box day-name">Mon</span>
        <span className="box day-name">Tue</span>
        <span className="box day-name">Wed</span>
        <span className="box day-name">Thu</span>
        <span className="box day-name">Fri</span>
        <span className="box day-name">Sat</span>
        <span className="box day-name">Sun</span>
      </div>
    );
  }
}
