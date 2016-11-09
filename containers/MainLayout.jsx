import React from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

/**
 * Az oldal alapjat kepezo Layout komponens
 * Segitsegevel mindenhol megjelenitheto egy "globalis" Header/Footer
 */
class MainLayout extends React.Component {

  render () {
    return (
      <div>
        <Header /> {this.props.children}
        <Footer />
      </div>
    )
  }
}

MainLayout.contextTypes = {
  store: React.PropTypes.object
}

MainLayout.propTypes = {
  children: React.PropTypes.object
}

export default MainLayout
