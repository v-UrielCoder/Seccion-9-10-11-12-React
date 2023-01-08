import { render, screen } from "@testing-library/react"
import { UserContext } from "../../src/09-useContext/context/UserContext"
import { HomePage } from "../../src/09-useContext/HomePage"

describe('pruebas en el componente HomePage', () => {

  const user = {
    id: 1,
    name: 'Fernando'
  }

  test('debe de mostar el componente sin el usuario', () => {

    render( 
      <UserContext.Provider value={{user : null}} >
        <HomePage />
      </UserContext.Provider>
    )
    
    const preTag = screen.getByLabelText('pre');
    expect( preTag.innerHTML ).toBe('null')
  })

  test('debe de mostar el componente con el usuario', () => {

    render( 
      <UserContext.Provider value={{ user }} >
        <HomePage />
      </UserContext.Provider>
    )
    
    const preTag = screen.getByLabelText('pre');
    expect( preTag.innerHTML ).toContain( JSON.stringify( user, null, 3))
  })
})