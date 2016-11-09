import * as ActionTypes from './ActionTypes'

/**
 * [loginRequest description]
 * @param  {[type]} params [description]
 * @return {[type]}       [description]
 */
export function apiRequest (params) {
  return {
    type: ActionTypes.API_REQUEST,
    endpoint: params.endpoint,
    options: params.requestOptions
  }
}

/**
 * [apiRequestSuccess description]
 * @param  {[type]} response [description]
 * @return {[type]}          [description]
 */
export function apiRequestSuccess (response, fromEndpoint) {
  return {
    type: ActionTypes.API_REQUEST_SUCCESS,
    fromEndpoint: fromEndpoint,
    response: response
  }
}

/**
 * [apiRequestFailure description]
 * @param  {[type]} error [description]
 * @return {[type]}       [description]
 */
export function apiRequestFailure (error) {
  return {
    type: ActionTypes.API_REQUEST_FAILURE,
    fromEndpoint: fromEndpoint,
    error: error
  }
}
