import React, { Component } from "react";
import "../styles/style.css";
import { connect } from "react-redux";

class Counter extends Component {
  increment = () => {
    this.props.dispatch({ type: "INCREMENT" });
  }

  decrement = () => {
    this.props.dispatch({ type: "DECREMENT" });
  }
  reset = () => {
    this.props.dispatch({ type: "RESET" });
  }

  render() {
    return (
      <div className="counter-container">
        <h2>Counter</h2>
        <div className="counter">
          <button onClick={() => this.decrement()}>-</button>
          <p className="counter-number">{this.props.count}</p>
          <button onClick={() => this.increment()}>+</button>
        </div>
        <button className="reset-button" onClick={() => this.reset()}>Reset</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    count: state.count
  };
}
export default connect(mapStateToProps)(Counter);