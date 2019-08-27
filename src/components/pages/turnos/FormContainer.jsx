import React, { Component } from 'react'
import FormComponent from './FormComponent'

class Form extends Component {
  constructor (...props) {
    super(...props)
    this.state = {}
  }

  render () {
    return (
      <FormComponent />
    )
  }
}

export default Form
