import React from 'react';

export const Card = (props) => {

//   const cardPlace = props.props.props.props.map((props) => 
  // <div className='card-place'>
  //   <img className='img' src={props.props.img} alt="img" />
  //   <div className='text-description'>
  //     <h3>{props.props.name}</h3> 
  //     <button className='description_button'>Description</button>
  //   </div>
  // </div>
// )

// return (
//   <> {cardPlace} </>
// )

    return (
      <div className='card-place'>
        <img className='img' src={props.props.img} alt="img" />
        <div className='text-description'>
          <h3>{props.props.name}</h3> 
          <button className='description_button'>Description</button>
        </div>
      </div>
    )
}
