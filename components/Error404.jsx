import React from 'react'
import Error from './Error.jsx'

/**
 * 404 Error page
 */
class Error404 extends Error {

  render () {
    return (
      <div>{this.createErrorMessage('Resource Not Found')}</div>
    )
  }
}

export default Error404
