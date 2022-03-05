import React from 'react';

export const Card_list = (props) => {
  
  const cardPlace = props.props.map((props) => 
  <div className='card-place'>
    <img className='img' src={props.img} alt="img" />
    <div className='text-description'>
      <h3>{props.name}</h3> 
      <button className='description_button'>Description</button>
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
)

}


// export default Card_list = (props) => {

//   const cardPlace = props.props.map((props) => 
//   <div className='card-place'>
//     <img className='img' src={props.props.img} alt="img" />
//     <div className='text-description'>
//       <h3>{props.props.name}</h3> 
//       <button className='description_button'>Description</button>
//     </div>
//   </div>
// )

// return (
//   <div className='container'>
//     <h1>Marvel Heroes</h1>
//     <div className='card-list'>
//       {cardPlace} 
//     </div>
//   </div>
// )

// }
