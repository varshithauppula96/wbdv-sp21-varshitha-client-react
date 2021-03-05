import React from 'react'

export default class Display extends React.Component{

    constructor(props) {

        super(props);

    }
    render(){
        return(
            <h1>  Counter {this.props.count}</h1>
        )
    }
}