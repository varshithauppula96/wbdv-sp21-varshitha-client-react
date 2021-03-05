import React from 'react'
import Display from "./counter-display";
import Up from "./counter-up";
import Down from "./counter-down";
export default class Counter extends React.Component
{

    state ={
        count:123
}
up=()=>{
        this.setState((prevState) =>{
return{
    count: prevState.count +1
}

    })
}

down =() =>{
this.setState((prevState) =>
{
    return {
        count : prevState.count -1
    }
})
}
    render() {
        return (
            <div>
           <Display count={this.state.count}/>
            <Up up={this.up}/>
             <Down down={this.down}/>
            </div>
        )
    }
}