import React from 'react'

export default function Header() {
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

