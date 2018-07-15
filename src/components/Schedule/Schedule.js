import React, { Component } from "react";
import moment from "moment";
import { getEvents } from "./gcal";

import BigCalendar from "react-big-calendar";
// a localizer for BigCalendar
BigCalendar.momentLocalizer(moment);

class Schedule extends Component {
  constructor() {
    super();
    this.state = {
      events: []
    };
  }

  // componentDidMount() {
  //   getEvents(events => {
  //     console.log(events);
  //   });
  // }

  render() {
    return (
      <BigCalendar style={{ height: "90vh" }} events={this.state.events} />
    );
  }
}

export default Schedule;
