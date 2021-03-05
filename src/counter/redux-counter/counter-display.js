import React from 'react'
import {connect} from "react-redux";
const CounterDisplay =({theCount = 1})=>{
    return(
        <h1>Counter Redux : {theCount}</h1>
    )

}



const stateToPropertyMapper = (state) =>
{
    return {
        theCount: state.count
    }
}
export default connect(stateToPropertyMapper)(CounterDisplay)