import React, { Component } from 'react'
import Card from './Card'

export default class Card_list extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Персонажи Marvel</h1>
        <div className='card-list'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    )
  }
}
