import React from 'react'
import context from '../../utils/context'

const Display = () => {
  return(
    <context.Consumer>
          <h1>From the desk of 007</h1>
    </context.Consumer>
  )
}

export default Display