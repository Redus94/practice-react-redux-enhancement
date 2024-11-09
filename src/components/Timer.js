import React from "react";

class Timer extends React.Component {
  state = {
    time: 0,
  };

  render() {
    const { hours, minutes, seconds } = this.props;
    return (
      <section>
        Dziękujemy, że jesteś z nami już {hours}h {minutes}m {seconds}s.
      </section>
    );
  }
}

export default Timer;
