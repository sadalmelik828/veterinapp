import React, { Component } from 'react'

class Signup extends Component {
  render () {
    return (
      <div>
        <h2>Sign Up !</h2>
        <form id="signup-form" method="post" action="#">
          <input type="email" name="email" id="email" placeholder="Email Address" />
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    )
  }
}

export default Signup
