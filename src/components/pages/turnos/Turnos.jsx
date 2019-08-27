import React, { Component } from 'react'
import Form from './FormContainer'

class Turnos extends Component {
  constructor (...props) {
    super(...props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <h2>Turnos</h2>
        <Form />
      </div>
    )
  }
}

export default Turnos
