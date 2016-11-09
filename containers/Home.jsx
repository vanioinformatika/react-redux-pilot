import React from 'react'
import {Grid, Row, Col, Jumbotron, Button} from 'react-bootstrap'

/**
 * Home oldalhoz tartozo, azt reprezentalo komponens
 */
/* Komponenseket egy befoglalo tag koze kell rakni
 FONTOS: csak egy node visszaadasara jogosult!!!
 Tobb egymas utan kovetkezo node eseten ezt akarna forditani: React.createElement('', , ) React.createElement('', , );
 ami hibahoz vezetne, ezert ekll a wrapper node
 A zarojelek pedig a tobb soros lebontas miatt kellenek */
class Home extends React.Component {
  render () {
    return (
      <Grid>
        <Row>
          <Col smOffset={1} sm={10}>
            <Jumbotron>
              <h1>Sziasztok!</h1>
              <br />
              <p>Az előadás célja, hogy bemutassam az egyes aktuálisan dübörgő front-end technológiákat, azok sajátságait és használhatóságát, illetve minden olyan dolgot ami érdekes lehet a számunkra a jövő fejlesztésekre nézve.</p>
              <p><Button bsStyle="primary">Tovább >></Button></p>
            </Jumbotron>
          </Col>
        </Row>
      </Grid>
    )
  }
}

Home.propTypes = {
  location: React.PropTypes.object
}

export default Home
