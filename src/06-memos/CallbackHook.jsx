import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {
  

  const [counter, setCounter] = useState(10)

  const incrementFather = useCallback(
    ( increment = 1) => {
      setCounter( (value) => value + increment);
    },
    []
  )

  // const increment = () => {
  //   setCounter( counter + 1)
  // }
  return (
    <>
      <h1>useCallBack Hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={incrementFather}/> 
    </>
  )
}
