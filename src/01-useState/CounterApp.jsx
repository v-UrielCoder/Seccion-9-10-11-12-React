import { useState } from "react"

export const CounterApp = () => {
  
  const [counter, setCounter] = useState()

  return (
    <>
      <h1>Counter: {counter}</h1>
      <hr />
      <button
        className="btn" 
        onClick={ () => setCounter( counter + 1)}>+1
      </button>
    </>
  )
}
