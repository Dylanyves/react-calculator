import React from 'react'
import { ACTIONS } from './Vars'

function Button({style, btnVal, dispatch}) {

    function dispatchCaller(type, value){
        dispatch({type: type, payload: {value}})
    }

    const buttonHandler = (value) => {
        if (typeof(value) === 'number' || value === '.'){
            dispatchCaller(ACTIONS.ADD_DIGIT, value)
        }
        if (typeof(value) === 'string' && value !== '.'){
            if (value === 'AC'){ dispatchCaller(ACTIONS.CLEAR, value) }
            else if (value === 'DEL'){ dispatchCaller(ACTIONS.DELETE_DIGIT, value) }
            else if (value === '='){ dispatchCaller(ACTIONS.EVALUATE, value) }
            else { dispatchCaller(ACTIONS.CHOOSE_OPERATIONS, value) }
        }
    }

    return (
        <button onClick={() => buttonHandler(btnVal)} style={style}>{btnVal}</button>
    )
}

export default Button