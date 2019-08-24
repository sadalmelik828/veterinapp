import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import Signup from './Signup'
import 'pure-css'
import './Header.css'

class Header extends Component {
  constructor (...props) {
    super(...props)

    this.state = {

    }
    this.handleOnClick = this.handleOnClick.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
    this.toggleHorizontal = this.toggleHorizontal.bind(this)
  }

  toggleHorizontal () {
    [].forEach.call(
      document.getElementById('menu').querySelectorAll('.custom-can-transform'),
      function (el) {
        el.classList.toggle('pure-menu-horizontal')
      }
    )
  }

  toggleMenu () {
    if (document.getElementById('menu').classList.contains('open')) {
      setTimeout(this.toggleHorizontal, 500)
    } else {
      this.toggleHorizontal()
    }

    document.getElementById('menu').classList.toggle('open')
    document.getElementById('toggle').classList.toggle('x')
  }

  closeMenu () {
    if (document.getElementById('menu').classList.contains('open')) {
      this.toggleMenu()
    }
  }

  handleOnClick (e) {
    this.toggleMenu()
    e.preventDefault()
  }

  componentDidMount () {
    const WINDOW_CHANGE_EVENT = ('onorientationchange' in window) ? 'orientationchange' : 'resize'
    window.addEventListener(WINDOW_CHANGE_EVENT, this.closeMenu)
  }

  render () {
    return (
      <Router>
        <div>
          <header id="header">
            <div className="custom-wrapper" id="menu">
              <div className="pure-u-1 pure-u-md-1-3">
                <div className="pure-menu">
                  <a href="#" className="pure-menu-heading custom-brand">Brand</a>
                  <a href="#" className="custom-toggle" id="toggle" onClick={this.handleOnClick}><s className="bar"></s><s className="bar"></s></a>
                </div>
              </div>
              <div className="pure-u-1 pure-u-md-1-3">
                <div className="pure-menu pure-menu-horizontal custom-can-transform">
                  <ul className="pure-menu-list">
                    <li className="pure-menu-item">
                      <Link to="/" className="pure-menu-link" onClick={this.closeMenu}>Home</Link>
                    </li>
                    <li className="pure-menu-item">
                      <Link to="/about" className="pure-menu-link" onClick={this.closeMenu}>About</Link>
                    </li>
                    <li className="pure-menu-item">
                      <Link to="/contact" className="pure-menu-link" onClick={this.closeMenu}>Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pure-u-1 pure-u-md-1-3">
                <div className="pure-menu pure-menu-horizontal custom-menu-3 custom-can-transform">
                  <ul className="pure-menu-list">
                    <li className="pure-menu-item">
                      <Link to="/login" className="pure-menu-link" onClick={this.closeMenu}>Login</Link>
                    </li>
                    <li className="pure-menu-item">
                      <Link to="/signup" className="pure-menu-link" onClick={this.onClick}>SignUp</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </header>
          <main className="main">
            <Switch>
              <Route path="/" exact component={Signup} />
              <Route path="/about" component={Signup} />
              <Route path="/contact" component={Signup} />
              <Route path="/login" component={Signup} />
              <Route path="/signup" component={Signup} />
            </Switch>
          </main>
        </div>
      </Router>
    )
  }
}

export default Header
