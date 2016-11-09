function createLogger () {
  return ({getState}) => (next) => (action) => {
    console.log('Will dispatch:', action)
    // Call the next dispatch method in the middleware chain.
    let returnValue = next(action)
    console.log('State after dispatch:', getState())
    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue
  }
}
const logger = createLogger()
export default logger
