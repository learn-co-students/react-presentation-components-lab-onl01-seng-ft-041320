import React, { Component } from 'react';

export default class SimpleComponent extends React.Component {

  state = {
      mood: "happy"
    }

  handleClick = () => {
    let changeMood = (this.state.mood === "happy") ? "sad" : "happy"
      this.setState({mood: changeMood})
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        {this.state.mood}
      </div>
    )
  }
}
