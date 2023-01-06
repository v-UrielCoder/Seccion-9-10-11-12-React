import React, { useState } from 'react'
import { UserContext } from './UserContext'

const prueba = {
  id: 123,
  name: 'Uriel Emiliano',
  email: 'uriel@gmail.com'
}

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{ user, setUser }} > {/* Se puede compartir cualquier valor */}
      { children }
    </UserContext.Provider>
  )
}
