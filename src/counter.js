import React from 'react'

const Counter = ({ counter = 0, inc, dec }) => {
  return (
    <h1>
      This is the counter {counter}
      <div>
        <button onClick={inc}>Increment</button>
        <button onClick={dec}>Decrement</button>
      </div>
    </h1>
  )
}

export default Counter
