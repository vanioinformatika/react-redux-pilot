import {combineReducers} from 'redux'
import AuthReducer from './AuthReducer'
import {routerReducer} from 'react-router-redux'
// Root reducer, amely kombinalja az osszes statehez tartozo reducert
const CombinedReducers = combineReducers({
  // Auth action reducers
  auth: AuthReducer,
  // Reducer for react router redux must be under 'routing' key
  routing: routerReducer
})
export default CombinedReducers
