import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import Historia from './pages/historia/Historia'
import Laboratorio from './pages/laboratorio/Laboratorio'
import Pacientes from './pages/pacientes/Pacientes'
import Turnos from './pages/turnos/Turnos'
import Login from './pages/usuarios/Login'
import Signup from './pages/usuarios/Signup'
import Error404 from './pages/Error404'
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
                      <Link to="/" className="pure-menu-link" onClick={this.closeMenu}>Turnos</Link>
                    </li>
                    <li className="pure-menu-item">
                      <Link to="/historia" className="pure-menu-link" onClick={this.closeMenu}>Historia</Link>
                    </li>
                    <li className="pure-menu-item">
                      <Link to="/laboratorio" className="pure-menu-link" onClick={this.closeMenu}>Laboratorio</Link>
                    </li>
                    <li className="pure-menu-item">
                      <Link to="/pacientes" className="pure-menu-link" onClick={this.closeMenu}>Pacientes</Link>
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
                      <Link to="/signup" className="pure-menu-link" onClick={this.closeMenu}>SignUp</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </header>
          <main className="main">
            <Switch>
              <Route path="/" exact component={Turnos} />
              <Route path="/historia" component={Historia} />
              <Route path="/laboratorio" component={Laboratorio} />
              <Route path="/pacientes" component={Pacientes} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route component={Error404} />
            </Switch>
          </main>
        </div>
      </Router>
    )
  }
}

export default Header
