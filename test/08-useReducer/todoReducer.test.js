import { todoReducer } from "../../src/08-useReducer/todoReducer"

describe('Pruebas en todoReducer', () => {

  const initialState = [{
    id: 1,
    description: 'Demo Todo',
    done: false,
  }]

  test('debe de regresar el estado incial', () => {

    const newState = todoReducer( initialState, {})
    expect( newState ).toBe( initialState );

  })

  test('debe de agregar un Todo', () => {

    const action = {
      type: '[TODO] Add Todo',
      payload: {
        id: 2,
        description: 'Nuevo Todo',
        done: false
      }
    }

    const newState = todoReducer( initialState, action )
    expect( newState.length ).toBe(2)
    expect( newState ).toContain( action.payload );
  })

  test('debe de eliminar un Todo', () => {

    const action = {
      type: '[TODO] Remove Todo',
      payload: 1
    }

    const newState = todoReducer( initialState , action);

    expect( newState.length ).toBe(0)
    expect( newState ).not.toContain( initialState )


  })

  test('debe de realizar el Toggle del todo', () => {

    const action = {
      type: '[TODO] Toggle Todo',
      payload: 1
    }

    const newState = todoReducer( initialState, action );
    const [ todo ] = newState;

    expect( todo.done ).toBeTruthy()
  })
})