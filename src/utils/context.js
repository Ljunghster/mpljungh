import { createContext } from 'react'

const context = createContext({
  count: 0,
  handleIncrement: () => { },
  handleDecrement: () => { }
})

export default context
