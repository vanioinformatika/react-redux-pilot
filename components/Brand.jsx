import React from 'react'
import {Navbar} from 'react-bootstrap'

/**
 *
 * Stateless komponens v. Presentational component
 * @param {[type]} props [description]
 */
const Brand = (props) => {
  return (
    <Navbar.Brand>
      <a href="#">
        <span className="logo" /> {props.name}
      </a>
    </Navbar.Brand>
  )
}

/**
 * Property tipusok
 * @type {Object}
 */
Brand.propTypes = {
  name: React.PropTypes.string.isRequired
}

export default Brand
