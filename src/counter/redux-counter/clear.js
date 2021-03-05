import React from 'react'
import {connect} from "react-redux";

const CounterClear = ({clear}) => <button onClick={clear}>Clear</button>


const propertyToDispatcher =(dispatch) =>
{
    return {
        clear: () => {
            dispatch({type: "CLEAR"})
        }
    }
}
export default connect(
    ()=>{},
    propertyToDispatcher
)(CounterClear)