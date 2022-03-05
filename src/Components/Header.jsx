import React from 'react'

export default function Header() {
  return (
    <div className='header'>
      <button className='home'>Marvel</button>
      <form>
        <input placeholder='Search...'></input>
        <button className='all'>All</button>
      </form>
    </div>
  )
}

