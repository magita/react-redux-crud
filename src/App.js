import React, { Component } from 'react';

var App = () => {
  return (<Counter></Counter>)
}

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {count: 0}
  }

  hundlePlusButton = () => {
    this.setState({count: this.state.count + 1})
  }

  hundleMinusButton = () => {
    this.setState({count: this.state.count - 1})
  }



  render() {
    return (
      <div>
      <div>count:{this.state.count}</div>
      <button onClick={this.hundlePlusButton}>+1</button>
      <button onClick={this.hundleMinusButton}>-1</button>
      </div>
    )
  }
}

export default App;
