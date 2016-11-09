import React from 'react'
import {
    Grid,
    Row,
    Col,
    Panel,
    Image
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
class Profile extends React.Component {

  render () {
    const { user } = this.context.store.getState().auth
    return (
      <Grid>
        <Row>
          <Col smOffset={3} sm={7}>
            <Panel header="Felhasználó profil információk">
              <Col sm={4}>
                <Image src="/assets/img/thumbnail.png" thumbnail />
              </Col>
              <Col sm={5}>
                <Row>
                  <h4>{user.name}</h4>
                </Row>
                <Row>
                  <p>
                    <i><a href={'mailto:' + user.sub}> {user.sub}</a></i>
                  </p>
                </Row>
                <Row>
                  <p>
                    <i> {user.role}</i>
                  </p>
                </Row>
              </Col>
            </Panel>

          </Col>
        </Row>
      </Grid>
    )
  }
}

Profile.contextTypes = {
  store: React.PropTypes.object
}

Profile.propTypes = {
  location: React.PropTypes.object
}

export default Profile
