import React from 'react'

export default class Down extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <button onClick={this.props.down}> down</button>

        )
    }
}