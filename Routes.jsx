import React from 'react'
import {IndexRoute, Route} from 'react-router'
import Home from './containers/Home.jsx'
import Profile from './containers/Profile.jsx'
import Login from './containers/Login.jsx'
import MainLayout from './containers/MainLayout.jsx'
import TechnologyInfo from './containers/TechnologyInfo.jsx'
import Error404 from './components/Error404.jsx'

export default (
  <Route component={MainLayout} path="/">
    <IndexRoute component={Home} />
    <Route path="user/profile" component={Profile} />
    <Route path="technologyinfo/:id" component={TechnologyInfo} />
    <Route path="login" component={Login} />
    <Route path="*" errorNum="404" component={Error404} />
  </Route>
)
