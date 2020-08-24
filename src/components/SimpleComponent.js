// Code SimpleComponent Here
import React from 'react';

class SimpleComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            mood: "happy",
        }
    }

    handletoggle = () => {
        
        this.setState({
            mood: "sad",
        })

    }

    render() {
        return(
            <div onClick={this.handletoggle}>
                {this.state.mood}
            </div>
            
        )
    }
}

export default SimpleComponent;