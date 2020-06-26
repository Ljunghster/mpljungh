import React from 'react'
import context from '../../utils/context'

const Display = () => {
  return(
    <context.Consumer>
      {
        ({ count }) => (
          <h1>Count: {count}</h1>
          )
      }
    </context.Consumer>
  )
}

export default Display