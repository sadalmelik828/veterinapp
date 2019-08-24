import React, { Component } from 'react'
import './index.css'
import Header from './Header'
import Footer from './Footer'

class App extends Component {
  constructor (...props) {
    super(...props)

    this.state = {
      test: true
    }
  }

  render () {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    )
  }
}

export default App
