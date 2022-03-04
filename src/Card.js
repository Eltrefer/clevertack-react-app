import React, { Component } from 'react'
import './css/card.css'

export default class Card extends Component {
  render() {
    return (
      <div className='card-place'>
        <img className='img' src='http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b.jpg'></img>
        <div className='text-description'>
          <h3>Человек-паук</h3>
          <button>Description</button>
        </div>
      </div>
    )
  }
}
