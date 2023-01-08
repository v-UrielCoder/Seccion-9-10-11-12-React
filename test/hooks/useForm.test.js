import { act, fireEvent, renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm"

describe('Pruebas en useForm', () => {

  const initialForm = {
    name: 'Uriel',
    email: 'uriel@gmail.com'
  }

  test('debe de regresar los valores por defecto', () => {

    const { result } = renderHook( () => useForm( initialForm ))


    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    })
  })

  test('debe de cambiar el nombre del formulario', () => {

    const newValue = 'Juan'

    const { result } = renderHook( () => useForm( initialForm ));
    const { onInputChange } = result.current

    act( () => {
      onInputChange({ target: {name: 'name', value: newValue} })
    })

    expect( result.current.name ).toBe( newValue )

  })

  test('debe de reinicar el nombre del formulario', () => {

    const newValue = 'Juan'

    const { result } = renderHook( () => useForm( initialForm ));
    const { onResetForm, onInputChange } = result.current

    act( () => {
      onInputChange({ target: {name: 'name', value: newValue} })
      onResetForm()
    })

    expect( result.current.name ).toBe( initialForm.name )

  })
})