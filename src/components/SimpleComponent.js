// Code SimpleComponent Here
import React, { Component } from 'react';

class DumbComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mood: 'happy'
    };
  }

  handleClick = () => {
    const newMood = this.state.mood === 'happy' ? 'sad' : 'happy';
    // let one = 1;
    // let two = 2;
    // let three = 3;
    // const x = one === two ? three : two;
    // x;
    this.setState({ mood: newMood });
  }

  render() {
    return <div onClick={this.handleClick}>{this.state.mood}</div>;
  }
}

export default DumbComponent; 