import React, { useState } from 'react';
import Card_list from './Card_list';
import Dashboard from './Dashboard';


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
      <Card_list filteredPersons={filteredPersons} />
    </>
  );
}

export default Search;