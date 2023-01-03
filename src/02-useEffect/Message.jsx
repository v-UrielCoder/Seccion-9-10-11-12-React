import { useEffect } from "react"

export const Message = () => {

  useEffect(() => {

    const onMouseMove = ( {x, y} ) => {
      const coords = { x, y }
      console.log(coords);
    }

    window.addEventListener( 'mousemove', onMouseMove)

    //Realiza la limpieza del componente al terminar su uso
    return () => {
      window.removeEventListener( 'mousemove', onMouseMove)
    }
  }, [] )
  

  return (
    <>
      <h3>Usuario ya existe</h3>
    </>
  )
}
