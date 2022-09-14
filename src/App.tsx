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
    this.showAlert = this.showAlert.bind(this);
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

  showAlert() {
    alert(`It is ${this.state.date.toLocaleTimeString()}.`);
  }

  render() {
    return (
      <div className="container">
        <button className="button-53" onClick={this.showAlert}>
          Click me!
        </button>
      </div>
    );
  }
}

export default Clock;
