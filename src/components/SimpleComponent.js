import React from 'react'

export default class SimpleComponeent extends React.Component {
    state = {
        mood: 'happy'
    }

    handleClick = () => {
        this.setState({
            mood: 'sad'
        })
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                {this.state.mood}
            </div>
        )
    }
}