import React from 'react'
import {MenuItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import * as ApiActions from '../actions/ApiActions'

class Logout extends React.Component {

  requestLogout (event) {
      // Dispatch action
    this.props.dispatch(
          ApiActions.apiRequest(
            {
              endpoint: '/logout',
              requestOptions: {
                method: 'POST',
                mode: 'cors',
                redirect: 'follow',
                headers: new Headers({'Content-Type': 'application/json'}, {'Access-Control-Allow-Origin': '*'}),
                body: this.props.user
              }
            }
          )
      )
  }

  render () {
    return (
      <LinkContainer to="#">
        <MenuItem eventKey={2.2} onClick={(event) => this.requestLogout(event)}>Logout</MenuItem>
      </LinkContainer>
    )
  }
}

Logout.propTypes = {
  isAuthenticated: React.PropTypes.bool.isRequired,
  user: React.PropTypes.object.isRequired,
  dispatch: React.PropTypes.func.isRequired
}

export default Logout
