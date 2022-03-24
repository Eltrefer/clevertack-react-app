import React, { Component } from "react";
import Modal from "./Modal"

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {

    const props = [
      { id: '1', name: "Spider-man",
        description: {
          description_text: "Укушенный радиоактивным пауком, старшеклассник Питер Паркер обрел скорость, силу и силу паука. Приняв имя Человек-паук, Питер надеялся начать карьеру, используя свои новые способности. Наученный тому, что с большой силой приходит большая ответственность, Паук поклялся использовать свои силы, чтобы помогать людям.",
          comics: ["Spider-Man: 101 Ways to End the Clone Saga (1997) #1", "2099 Alpha (2019) #1", "A YEAR OF MARVELS TPB (Trade Paperback)", "A Year of Marvels: April Infinite Comic (2016) #1", "A Year of Marvels: February Infinite Comic (2016) #1", "A+X (2012) #4", "Absolute Carnage (2019) #1", "Absolute Carnage (2019) #2", "Absolute Carnage (2019) #5", "Absolute Carnage: Symbiote Spider-Man (2019) #1", "Actor Presents Spider-Man and the Incredible Hulk (2003) #1", "Adventures of Spider-Man (1996) #1", "Adventures of Spider-Man (1996) #2", "Adventures of Spider-Man (1996) #3", "Adventures of Spider-Man (1996) #4", "Adventures of Spider-Man (1996) #5", "Adventures of Spider-Man (1996) #6", "Adventures of Spider-Man (1996) #7", "Adventures of Spider-Man (1996) #8", "Adventures of Spider-Man (1996) #9"]
        },
        img: 'http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b.jpg'
      }
    ]

    const list = props[0].description.comics.map( (x) => <li>{x}</li> ) 

    return (
      <>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <div className="card-modav-description">
            <h2>{props[0].name}</h2>
            <img src={props[0].img} alt="" srcset="" />
            <h3>Description:</h3>
            <p>{props[0].description.description_text}</p>
            <h3>Comiscs:</h3>
            <ul>
              {list}
            </ul>
          </div>
        </Modal>
        <button type="button" className='description_button' onClick={this.showModal}>
          Description
        </button>
      </>
    );
  }
}

export default Dashboard