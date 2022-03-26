import React from 'react';
import ModalWindow from './ModalWindow';


function Card_list({ filteredPersons }) {

  const cardPlace = filteredPersons.map(props => 
    
  <div className='card-place' id={props.id}>
    <img className='img' src={props.img} alt="img" />
    <div className='text-description'>
      <h3>{props.name}</h3>
      <ModalWindow props={props}/>
    </div>
  </div>
  )

  return (
    <div className='container'>
      <h1>Marvel Heroes</h1>
      <div className='card-list'>
        {cardPlace} 
      </div>
    </div>
  );
}

export default Card_list; 