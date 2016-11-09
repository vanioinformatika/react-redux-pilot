import React from 'react'
import {connect} from 'react-redux'
import { push } from 'react-router-redux'
import * as ApiActions from '../actions/ApiActions'
import {
  Button,
  Form,
  FormGroup,
  FormControl,
  Checkbox,
  ControlLabel,
  Col,
  Row
} from 'react-bootstrap'

/**
 * Minden komponens 2 dolgot csinál:
 * 1. user/server eseményekre hallgat, vagy küld.
 * Ezek Redux alatt gyakorlatilag JSON objektumok, amiket Action-nek hivunk.
 * action --> { "type": "FETCH_POST", "id":1234 }
 * 2. Kapott adatok alapjan renderel DOM reszeket.
 * Ezt az adatot nevezzük state-nek, ami szinten egy JSON objektum.
 * state --> { "post": {"id":, "title": "My Redux Post" }
 */
class Login extends React.Component {

  requestLogin (event) {
    const creds = {
      email: this.email,
      password: this.password
    }

    // Dispatch action
    this.context.store.dispatch(
        ApiActions.apiRequest(
          {
            endpoint: '/login',
            requestOptions: {
              method: 'POST',
              mode: 'cors',
              redirect: 'follow',
              headers: new Headers({'Content-Type': 'application/json'}, {'Access-Control-Allow-Origin': '*'}),
              body: JSON.stringify(creds)
            }
          }
        )
    )
  }

  componentWillMount () {
    if (this.context.store.getState().auth.isAuthenticated) {
      this.context.store.dispatch(push('/'))
    }
  }

  componentWillUpdate () {
    if (this.context.store.getState().auth.isAuthenticated) {
      this.context.store.dispatch(push('/'))
    }
  }

  render () {
    return (
      <Row>
        <Col smOffset={3} sm={5}>
          <Form horizontal>
            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>
                Email
              </Col>
              <Col sm={10}>
                <FormControl onChange={(e) => { this.email = e.target.value }} type="email" placeholder="Email" />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={2}>
                Password
              </Col>
              <Col sm={10}>
                <FormControl onChange={(e) => { this.password = e.target.value }} type="password" placeholder="Password" />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Checkbox>Remember me</Checkbox>
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button type="button" bsStyle="primary" onClick={(event) => this.requestLogin(event)}>
                  Login
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </Col>
      </Row>

    )
  }
}

const mapStateToProps = (state) => {
  return {auth: state.auth}
}

Login.contextTypes = {
  store: React.PropTypes.object
}

export default connect(mapStateToProps)(Login)
