import React, { Component } from 'react'

class SimpleComponent extends Component {

    state = {
        mood: 'happy'
    }

    handleClick = () => {
        let toggleMood = this.state.mood === 'happy' ? 'sad' : 'happy'
        this.setState({ mood: toggleMood })
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                {this.state.mood}
            </div>
        )
    }
}

export default SimpleComponent