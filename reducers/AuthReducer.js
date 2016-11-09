// Reducer fuggvenyek olyanok mint az esemenykezelok
// dispatch segitsegevel erkeznek hozzzajuk Action objektumok és az aktualis state
// es visszaadnak egy uj state-et.
import * as ActionTypes from '../actions/ActionTypes'
import * as JWT from 'jwt-simple'

/**
 * Felolvassa a felhasznalohoz tartozo tokent, ha letezik es valid akkor visszaadja
 * @return {[type]} [description]
 */
const extractToken = () => {
  try {
    return JWT.decode(localStorage.getItem('id_token'), 'client_secret')
  } catch (e) {
    return null
  }
}
const user = extractToken()
const INITIAL_STATE = {
  isAuthenticated: user ? true : false,
  isFetching: false,
  user: user
}

const Endpoints = { LOGOUT: '/logout', LOGIN: '/login' }

export default function (state = INITIAL_STATE, action) {
  const { isAuthenticated } = state
  let newState = Object.assign({}, state)

  switch (action.type) {
    case ActionTypes.API_REQUEST:
      switch (action.fromEndpoint) {
        case Endpoints.LOGIN:
          newState = Object.assign({}, state, {
            isFetching: true,
            isAuthenticated: false,
            creds: action.creds
          })
          break

        case Endpoints.LOGOUT:
          newState = Object.assign({}, state, {
            isFetching: true,
            isAuthenticated: isAuthenticated,
            user: user
          })
          break
      }
      return newState

    case ActionTypes.API_REQUEST_SUCCESS:
      console.log('REDUCER -> API_REQUEST_SUCCESS')
      switch (action.fromEndpoint) {
        case Endpoints.LOGIN:
          console.log('---------fromEndpoint:', action.fromEndpoint)
          localStorage.setItem('id_token', action.response.id_token)
          newState = Object.assign({}, state, {
            isFetching: false,
            isAuthenticated: true,
            user: JWT.decode(action.response.id_token, 'client_secret')
          })
          break

        case Endpoints.LOGOUT:
          console.log('---------fromEndpoint:', action.fromEndpoint)
          localStorage.removeItem('id_token')
          newState = Object.assign({}, state, {
            isFetching: false,
            isAuthenticated: false,
            user: null
          })
          break
      }
      return newState

    case ActionTypes.API_REQUEST_FAILURE:
      console.log('REDUCER -> API_REQUEST_FAILURE')
      switch (action.fromEndpoint) {
        case Endpoints.LOGIN:
          localStorage.setItem('id_token', action.response.id_token)
          newState = Object.assign({}, state, {
            isFetching: false,
            isAuthenticated: isAuthenticated,
            error: action.error
          })
          break

        case Endpoints.LOGOUT:
          newState = Object.assign({}, state, {
            isFetching: false,
            isAuthenticated: isAuthenticated,
            error: action.error
          })
          break
      }
      return newState

    default:
      return newState
  }
}
