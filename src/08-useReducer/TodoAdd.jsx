import { useState } from "react";
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {

  const { description, onInputChange, onResetForm } = useForm({
    description: ''
  })
  
  const createTodo = (event) => {
    event.preventDefault();
    if( description.length <= 1 ) return

    onNewTodo({id: new Date().getTime(), description, done: false});
    onResetForm() 
  }

  return (
    
    <form onSubmit={ createTodo } >
      <input type="text" 
        placeholder="¿Que hay que hacer?"
        className="form-control"
        value={description}
        name={'description'}
        onChange={ onInputChange }
      />
      <button
        type="submit"
        className="btn btn-outline-primary mt-1">Agregar</button>
    </form>
    
  )
}
