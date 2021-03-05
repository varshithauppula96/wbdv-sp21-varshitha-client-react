import React from 'react'
import CounterDisplay from "./counter-display";
import CounterUp from "./UP";
import CounterDown from "./Down";
import {createStore} from "redux";
import {Provider} from "react-redux";
import CounterClear from "./clear";
import reducer from "./reducers/count-reducer";

const store =createStore(reducer)


export default class CounterRedux extends React.Component {
    render() {
        return (
            <Provider store={store}>
            <div>
                <CounterDisplay/>
                <CounterUp/>
                <CounterDown/>
                <CounterClear/>
            </div>
            </Provider>
        );

    }
}