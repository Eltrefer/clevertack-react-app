import React from 'react'
import Modal from 'react-modal/lib/components/Modal'

export default function ModalWindow( {props} ) {

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
    <button className='description_button' onClick={openModal}>Description</button>
    <Modal
      parentSelector={() => document.querySelector('.App')}
      className="modal"
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
    >
      <section className="modal-main" >
        <div className="card-modav-description">
          <h2>{props.name}</h2>
          <img src={props.img} alt="" srcset="" />
          <h3>Description:</h3>
          <p>{props.description.description_text}</p><h3>Comiscs:</h3>
          <ul>
            {props.description.comics.map( (x) => <li>{x}</li> )}
          </ul>
        </div>
        <div className="close-button">
          <button className='description_button' onClick={closeModal} >
            Close
          </button>
        </div>
      </section>
    </Modal>
    </>
  )
}

