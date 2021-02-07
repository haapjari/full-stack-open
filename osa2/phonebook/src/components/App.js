import React, { useState } from 'react'
import Person from './Person'

const App = ( props ) => {
  const [ persons, setPersons ] = useState ([
    { name: 'Arto Hellas',
      number: '044 1234567',
      id: 1
    }
  ])
  // newName state is meant for controlling the form input element
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const addName = (event) => {
      event.preventDefault()

      /* create new object for the person, which will receive its content from components newName state */ 
      const nameObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      }

      var checkValue = 0 // very gross way to implement this
      for (var i = 0; i < persons.length; i++) {

        // loop over the array, if there is match - truth value to 1
        if (persons[i].name === nameObject.name) {
          checkValue = 1
        } 

      }

      // exercute this if truth value is 1, if its not add person to phone book
      if (checkValue === 1) {
        alert(`${newName} is already added to phonebook`)
        setNewName('') 
        setNewNumber('')
      } else {
        setPersons(persons.concat(nameObject))
        console.log(`${newName} succesfully added to phonebook`)
        setNewName('')
        setNewNumber('')
      }

      console.log(persons)
    }

  const handleNameChange = (event) => {
    // console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: 
          <input 
            value={newName}
            onChange={handleNameChange}
          />
        </div>
          number:
          <input 
            value={newNumber}
            onChange={handleNumberChange}
          />
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, i) =>
          <Person key={i} person={person}/>
        )}
      </ul>
    </div>
  )
}

export default App;
