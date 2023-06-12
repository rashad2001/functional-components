
import React, { useState } from 'react'

function UseState() {

    const [count, setCount] = useState(4)
    function decrementCount(){
        setCount(count-1)
    }

    function incrementCount(){
        setCount(prevCount => prevCount +1)
    }
  return (
    <div>
      <button onClick={incrementCount} >+</button>
      <p>{count}</p>
      <button onClick={decrementCount}>-</button>
    </div>
  )
}

export default UseState
