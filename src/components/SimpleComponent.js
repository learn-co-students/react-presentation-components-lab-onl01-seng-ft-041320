import React, {Component} from 'react';

export default class SimpleComponent extends Component{
    state = {
        mood: 'happy'
    }

    handleClick = () => {
        this.setState(prevState => {
            return prevState.mood === 'happy' ? { mood: 'sad' } : { mood: 'happy' }
        })
    }

    render(){
        return(
            <div onClick={this.handleClick}>{this.state.mood}</div>
        )
    }
}
