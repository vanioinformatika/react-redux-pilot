import React from 'react'
import {connect} from 'react-redux'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import {IndexLinkContainer, LinkContainer} from 'react-router-bootstrap'
import Brand from '../components/Brand.jsx'
import Logout from './Logout.jsx'

// State handling must be in higher level container components or in Flux/Redux
// Stateless component will render always the vdom when it is invoked
// Az ilyen komponensek a buta prezentacios komponensnek jok
class Header extends React.Component {

  render () {
    const { isAuthenticated, user } = this.context.store.getState().auth
    console.log('HEADER:', isAuthenticated, user)
    return (
      <div>
        <Navbar inverse>
          <Navbar.Header>
            <LinkContainer to="/">
              <Brand name="React" />
            </LinkContainer>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <IndexLinkContainer to="/" onlyActiveOnIndex>
                <NavItem eventKey={1}>Home</NavItem>
              </IndexLinkContainer>
              {
                  isAuthenticated &&
                  <NavDropdown eventKey={2} title="Technology info" id="basic-nav-dropdown">
                    <LinkContainer to="/technologyinfo/1">
                      <MenuItem eventKey={2.1}>React and Redux</MenuItem>
                    </LinkContainer>
                    <MenuItem divider />
                    <LinkContainer to="/non_existing_routing">
                      <MenuItem eventKey={2.3}>Non existing roting</MenuItem>
                    </LinkContainer>
                  </NavDropdown>
              }
            </Nav>
            {
                !isAuthenticated &&
                <Nav pullRight>
                  <LinkContainer to="/login">
                    <NavItem eventKey={1}>Login</NavItem>
                  </LinkContainer>
                </Nav>
            }
            {
                isAuthenticated && user &&
                <Nav pullRight>
                  <NavDropdown eventKey={2} title={user.name} id="basic-nav-dropdown">
                    <LinkContainer to="/user/profile">
                      <MenuItem eventKey={2.1}>Profile</MenuItem>
                    </LinkContainer>
                    <MenuItem divider />
                    <Logout isAuthenticated={isAuthenticated} user={user} dispatch={this.context.store.dispatch} />
                  </NavDropdown>
                </Nav>
            }
          </Navbar.Collapse>
        </Navbar>
      </div>
      )
  }
}

const mapStateToProps = (state) => {
  return {auth: state.auth}
}

Header.contextTypes = {
  store: React.PropTypes.object
}

export default connect(mapStateToProps)(Header)
