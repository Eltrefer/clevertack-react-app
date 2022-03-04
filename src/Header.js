import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <button id='Home'>Marvel</button>
        <form>
          <input placeholder='Search...'></input>
          <button id='All'>All</button>
        </form>
      </div>
    )
  }
}
