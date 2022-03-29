import React, { useState } from 'react';
import CardList from './CardList';


function Search({ details }) {

  // ----------------------Работает - не трогай!--------------------------
  const [searchField, setSearchField] = useState("");

  const filteredPersons = details.filter(
    person => {
      return (
        person.name.toLowerCase().includes(searchField.toLowerCase()) 
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
  };
  //----------------------------------------------------------------------

  return (
    <>
      <div className='header'>
        <button className='home'>Marvel</button>
        <form>
          <input className='search' onChange = {handleChange} placeholder='Search...'></input>
          <button className='all'>All</button>
        </form>
      </div>
      <CardList filteredPersons={filteredPersons} />
    </>
  );
}

export default Search;