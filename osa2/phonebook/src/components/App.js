import React, { useState } from 'react'
import Person from './Person'

const App = ( props ) => {
  const [ persons, setPersons ] = useState ([
    { name: 'Arto Hellas' }
  ])
  // newName state is meant for controlling the form input element
  const [ newName, setNewName ] = useState('')

  const addName = (event) => {
      event.preventDefault()

      /* create new object for the person, which will receive its content from components newName state */ 
      const nameObject = {
        content: newName,
        date: new Date().toISOString(),
        id: persons.length + 1,
      }

      setPersons(persons.concat(nameObject))
      setNewName('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
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
