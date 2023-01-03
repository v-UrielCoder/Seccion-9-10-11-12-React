import { memo } from 'react'

export const Small = memo(({ value }) => {

  console.log('Me volvi a dibujar :C');

  return (
    <>
      <small>{ value }</small>
    </>
  )
})
