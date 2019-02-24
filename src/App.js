import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { counter: 0 };
    /* this.updateCounter = this.updateCounter.bind(this); */
  }
  


  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={this.updateCounter.bind(this)} ></textarea>
        <div className="counter">{this.state.counter}</div>
      </div>
    );
  }

  updateCounter(evt) {
    this.setState({
      counter: evt.target.value.length
    });
  }



}

export default App;
