// Code SimpleComponent Here

import React, {Component} from 'react'

class SimpleComponent extends Component {
    constructor() {
        super()

        this.state = {
            mood: 'happy'
        }
    }

    handleClick = () => {
        this.setState(prevState => (
            {mood: prevState.mood === 'happy' ? 'sad' : 'happy'}
        ))
    }

    render() {
        const { mood } = this.state
        return <div onClick={this.handleClick}>{mood}</div>
    }
}

export default SimpleComponent