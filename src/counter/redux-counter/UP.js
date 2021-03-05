import React from 'react'
import {connect} from "react-redux";

const CounterDown = ({theUp}) => <button onClick={theUp}>UP</button>


const propertyToDispatcher =(dispatch) =>
{
    return {
        theUp: () => {
            dispatch({type: "UP"})
        }
    }
}
export default connect(
    ()=>{},
    propertyToDispatcher
)(CounterDown)