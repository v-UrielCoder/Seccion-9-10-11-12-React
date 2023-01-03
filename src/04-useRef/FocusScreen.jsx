import React, { useRef } from 'react'

export const FocusScreen = () => {

  const inputRef = useRef();

  const onClick = () => {
    inputRef.current.select()
  }
  return (
    <>
      <h1>FocusScreen</h1>
      <hr />

      <input type="text"
        ref={inputRef}
        placeholder='Ingrese su nombre'
        className='form-control'
      />
      
      <button 
        onClick={onClick}
        className='btn btn-primary mt-2'>
        Set Focus
      </button>
    </>
  )
}
