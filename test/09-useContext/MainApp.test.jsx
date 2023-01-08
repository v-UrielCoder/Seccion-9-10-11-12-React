import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { MainApp } from "../../src/09-useContext/MainApp"

describe('Pruebas en MainApp', () => {

  test('debe de mostrar el HomePage', () => {

    render(
      <MemoryRouter initialEntries={['/login']}>
        <MainApp />
      </MemoryRouter>
    )

    // screen.debug()

    expect( screen.getByText('LoginPage')).toBeTruthy();

  })

})