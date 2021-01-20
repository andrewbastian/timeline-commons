import React from 'react'

export const StoreContext = React.createContext(null)

export default ({ children }) => {

  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState([])


  const store = {
    username: [username, setUsername],
    password: [password, setPassword],
  }

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}