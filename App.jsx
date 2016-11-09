import React from 'react'
import {Provider} from 'react-redux'
import {Router, hashHistory} from 'react-router'
import {createStore, applyMiddleware} from 'redux'
import CombinedReducers from './reducers/CombinedReducers'
import thunkMiddleware from 'redux-thunk'
import {routerMiddleware, syncHistoryWithStore} from 'react-router-redux'
import api from './middleware/Api'
import logger from './middleware/Logger'

// components
import Routes from './Routes.jsx'
// custom style
import style from './assets/scss/style.scss'

/**
 * [routeMiddleware description]
 * @type {[type]}
 */
const routeMiddleware = routerMiddleware(hashHistory)

/**
 * [store description]
 * @type {[type]}
 */
const store = createStore(CombinedReducers, applyMiddleware(routeMiddleware, thunkMiddleware, api, logger))

/*
 Create an enhanced history that syncs navigation events with the store
 */
const history = syncHistoryWithStore(hashHistory, store)

/**
 * Root component
 */
class App extends React.Component {
  constructor (props) {
    super(props)
    console.log('RENDER APP')
    console.log('History: ', history)
    console.log('Store: ', store)
  }

  render () {
    return (
      <Provider store={store}>
        <Router history={history} routes={Routes} />
      </Provider>
    )
  }
}

export default App
