import React from 'react';
import Modal from 'react-modal';
import '../css/modal.css'

Modal.setAppElement('.text-description');

function ModalWindow( {props} ) {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const classNameOfModav = (document.querySelector('.App').classList[1] == 'dark') ? "modal dark" : "modal light";
  const list = props.description.comics.map( (x) => <li>{x}</li> ) 

  return (
    <>
      <button className='description_button' onClick={openModal}>Description</button>
      <Modal
        className="modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <div className={classNameOfModav}>
          <section className="modal-main" >
            <div className="card-modav-description">
              <h2>{props.name}</h2>
              <img src={props.img} alt="" srcset="" />
              <h3>Description:</h3>
              <p>{props.description.description_text}</p><h3>Comiscs:</h3>
              <ul>
                {list}
              </ul>
            </div>
            <div className="close-button">
              <button className='description_button' onClick={closeModal}>
                Close
              </button>
            </div>
          </section>
        </div>
      </Modal>
    </>
  );
}

export default ModalWindow