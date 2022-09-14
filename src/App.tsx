import React from "react";
import "./App.css";


interface ClockState {
  date: Date;
}

class Clock extends React.Component<any, ClockState> {

  private timerID?: number;

  constructor(props: any) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = window.setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div className="container">
        It is {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}

export default Clock;
