import * as ApiActions from '../actions/ApiActions'

/**
 * Api root konstans
 * @type {String}
 */
const API_ROOT = 'http://localhost:3001/api'

/**
 * [API_REQUEST description]
 * @type {String}
 */
const API_REQUEST = 'API_REQUEST'

/**
 * [createApiMiddleware description]
 * @return {[type]} [description]
 */
function createApiMiddleware () {
  console.log('API middleware created')
  // common api request method
  const apiRequest = (endpoint, options) => {
    // request url
    const url = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint
    console.log('Request params:', options)
    return fetch(url, options)
      .then(response =>
        response.json().then(
          json => {
            // problem or opaque response
            if (!response.ok) {
              return Promise.reject(json)
            }

            return json
          }
        )
      )
  }

  return ({dispatch, getState}) => next => action => {
    // Meg kell vizsgalni az actiont,
    // hogy olyan tipusus e mint amivel a middlewarenek foglalkoznia kell
    if (action.type !== API_REQUEST) {
      return next(action)
    }

    // teljes url megepitese
    const url = API_ROOT + action.endpoint
    const options = action.options

    // api hivas inditasa
    return apiRequest(url, options).then(
      /* response => next(actionWith({response,type: successType})), error => next(actionWith({type: failureType, error: error.message || 'Something bad happened'})) */
      response => {
        return next(ApiActions.apiRequestSuccess(response, action.endpoint))
      },
      error => {
        return next(ApiActions.apiRequestFailure(error, action.endpoint))
      }
    )
  }
}

const api = createApiMiddleware()
export default api
