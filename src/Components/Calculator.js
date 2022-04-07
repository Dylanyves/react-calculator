import React, { useState, useReducer, useEffect } from 'react'
import Head from './Head'
import Body from './Body'
import { ACTIONS } from './Vars'

function evaluation({ currentOperand, previousOperand, operation }){
  const current = parseFloat(currentOperand)
  const prev = parseFloat(previousOperand)
  let result = ''
  switch(operation){
    case '+':
      result = prev + current
      break
    case 'x':
      result = prev * current
      break
    case '-':
      result = prev - current
      break
    case '÷':
      result = prev / current
      break
  }
  return result
}

function reducer (state, { type, payload }){
  switch(type){
    case ACTIONS.ADD_DIGIT:
      if (state.currentOperand === '0' && payload.value === 0 || payload.value === '.' && state.currentOperand.includes('.')) return state
      else if (state.currentOperand === '0' && payload.value === '.') {return {...state, currentOperand: '0.'}}
      else if (state.currentOperand === '0' && payload.value !== 0) {return {...state, currentOperand:`${payload.value}`}}
      return {...state, currentOperand: `${state.currentOperand}${payload.value}`}

    case ACTIONS.CLEAR:
      return {currentOperand: '0', previousOperand: '-'}

    case ACTIONS.DELETE_DIGIT:
      if (state.currentOperand.length === 1) {return {...state, currentOperand: '0'}}
      return {...state, currentOperand: state.currentOperand.slice(0, -1)}

    case ACTIONS.CHOOSE_OPERATIONS:
      if (state.currentOperand === '0' || state.previousOperand === '-'){return {currentOperand: '0', previousOperand: state.currentOperand, operation: payload.value}}
      else if (state.previousOperand && state.currentOperand === '0'){return {...state, operation: payload.value}}
      else if (state.previousOperand && state.currentOperand !== '0') {return {currentOperand: '0', previousOperand: evaluation(state), operation: payload.value}}

    case ACTIONS.EVALUATE:
      if (state.currentOperand === '0' || state.previousOperand === '-'){return state}
      else if (state.currentOperand !== '0' && state.previousOperand !== '-'){return {currentOperand: evaluation(state), previousOperand: '-', operation: null}}
  }
}

function Calculator() {
  const [{currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer, {currentOperand: '0', previousOperand: '-'})

  return (
    <div className="calculator">
        <Head display={currentOperand} prevDisplay={previousOperand} operation={operation}/>
        <Body dispatch={dispatch}/>
    </div>
  )
}

export default Calculator