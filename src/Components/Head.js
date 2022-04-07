import React from 'react'

function Head({ display, prevDisplay, operation }) {
  return (
      <div className='head'>
          <span className='math'>{prevDisplay} {operation}</span>
          <h5 className='result'>{display}</h5>
      </div>
  )
}

export default Head