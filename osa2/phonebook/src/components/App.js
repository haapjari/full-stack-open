import React, { useState } from 'react'
import PersonForm from './PersonForm'
import Search from './Search'
import NumberList from './NumberList'
import personService from '../services/personService'

const App = ( props ) => {

  const [ persons, setPersons ] = useState ([
    { name: 'Arto Hellas', number: '044 1234567', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '39-44-5323523', id: 3 }
  ])
  // newName state is meant for controlling the form input element
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  
  // refactor --> useEffect
  const [ newPersonList, setNewPersonList ] = useState([
    { name: 'Arto Hellas', number: '044 1234567', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '39-44-5323523', id: 3 }
  ])

      const handleNameChange = (event) => {
        setNewName(event.target.value)
      }

      const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
      }

      const handleFilterChange = (event) => {
        setNewFilter(event.target.value)
      }

  return (
    <div>
      <h2>Phonebook</h2>

      <Search 
        newFilter={newFilter}
        handleFilterChange={handleFilterChange}
        setNewPersonList={setNewPersonList}
        persons={persons}
      />

      <PersonForm 
          persons={persons}
          setPersons={setPersons}
          newName={newName}
          setNewName={setNewName}
          newNumber={newNumber}
          setNewNumber={setNewNumber}
          newPersonList={setNewPersonList}
          setNewPersonList={setNewPersonList}
          handleNameChange={handleNameChange}
          handleNumberChange={handleNumberChange}
      />

      <NumberList 
          newPersonList={newPersonList}
      />

    </div>
  )
}

export default App;
