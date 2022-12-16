import './App.css';
import React from 'react';

class Counter extends React.Component {
  state = {
      count: 0,
  };

  incrementCount = () => {
      this.setState({
          count: this.state.count + 1,
      });
  };

  render() {
      return (
          <div>
          <h1> Нажми на кнопку !</h1>
          <button onClick={this.incrementCount}>Count: {this.state.count}</button>
      </div>
    );
  }
}

export default Counter;
