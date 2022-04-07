import React from 'react'
import Button from './Button'

function Body({ dispatch }) {
  
  const getButtons = () => {
      const btnValues = [0,1,2,3,4,5,6,7,8,9,'AC','DEL','÷','x','+','-','.','=']
      const btnRefs = ['ZERO', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE',
                      'CLEAR', 'DELETE', 'DIVIDE', 'MULTIPLY', 'ADD', 'SUBSTRACT', 'DOT', 'EQUAL']

      const buttons = []
      btnValues.forEach((value, index) => {
          const valRef = btnRefs[index]
          buttons.push([value, valRef])
      })
      return buttons
  }
  const allButtons = getButtons()

  return (
      <div className='body'>
        {allButtons.map(button => {
            const inlineStyleGrid = {'gridArea':button[1]}
            return <Button key={button[1]} style={inlineStyleGrid} btnVal={button[0]} dispatch={dispatch}/>
        })}
      </div>
    )
}

export default Body