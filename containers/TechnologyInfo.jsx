import React from 'react'
import {connect} from 'react-redux'
import { push } from 'react-router-redux'
import { Grid, Row, Col, Alert } from 'react-bootstrap'

/**
 * TechnologyInfo
 */
class TechnologyInfo extends React.Component {

  componentWillMount () {
    if (!this.context.store.getState().auth.isAuthenticated) {
      this.context.store.dispatch(push('/'))
    }
  }

  render () {
    return (
      <Grid>
        <Row>
          <Col smOffset={1} sm={10}>
            <Alert>
              <h4>Tulajdonság Semleges</h4>
              <br />
              <p>Leírás</p>
            </Alert>
          </Col>
        </Row>
        <Row>
          <Col smOffset={1} sm={10}>
            <Alert bsStyle="warning">
              <h4>Tulajdonság Semleges</h4>
              <br />
              <p>Leírás</p>
            </Alert>
          </Col>
        </Row>
        <Row>
          <Col smOffset={1} sm={10}>
            <Alert bsStyle="success">
              <h4>Tulajdonság Jó</h4>
              <br />
              <p>Leírás</p>
            </Alert>
          </Col>
        </Row>
        <Row>
          <Col smOffset={1} sm={10}>
            <Alert bsStyle="danger">
              <h4>Tulajdonság Jó</h4>
              <br />
              <p>Leírás</p>
            </Alert>
          </Col>
        </Row>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {auth: state.auth}
}

TechnologyInfo.contextTypes = {
  store: React.PropTypes.object
}

TechnologyInfo.propTypes = {
  location: React.PropTypes.object,
  params: React.PropTypes.object
}

export default connect(mapStateToProps)(TechnologyInfo)
