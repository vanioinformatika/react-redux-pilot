import React from 'react'
import {
    Row,
    Col,
    Alert,
    Button
} from 'react-bootstrap'

/**
 * Error page
 */
class Error extends React.Component {

  /**
    * Elkesziti a hiba uzenetet a kapott parameter alapjan
    */
  createErrorMessage (errorMessage) {
    return (
      <Row>
        <Col smOffset={1} sm={10}>
          <Alert bsStyle="danger">
            <h4>Error: {errorMessage || 'Unknown Error'}</h4>
            <p>Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.</p>
            <p>
              <Button bsStyle="danger">Take this action</Button>
              <span> or </span>
              <Button>Take that action</Button>
            </p>
          </Alert>
        </Col>
      </Row>
    )
  }

  render () {
    return (
      <div>
        {this.createErrorMessage()}
      </div>
    )
  }
}

export default Error
