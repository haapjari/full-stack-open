import React, { useState } from 'react'
import Person from './Person'

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

  const addName = (event) => {
      event.preventDefault()

      /* create new object for the person, which will receive its content from components newName state */ 
      const nameObject = {
        name: newName.trim(),
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
        /* staten päivitys */
        setNewPersonList(persons.concat(nameObject))
        console.log(`${newName} succesfully added to phonebook`)
        setNewName('')
        setNewNumber('')
      }

      // console.log(persons)
    }

      const handleNameChange = (event) => {
        // console.log(event.target.value)
        setNewName(event.target.value)
      }

      const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
      }

      const handleFilterChange = (event) => {
        setNewFilter(event.target.value)
      }

      const filterResults = (searchQuery) => {

        //  refactor -> regex
        const results = persons.filter(person => person.name.toLowerCase().includes(searchQuery))
        // console.log(persons)

        if (results.length < 1) {
          setNewPersonList(persons)
          return
        }

        setNewPersonList(results)
      }

  return (
    <div>
      <h2>Phonebook</h2>

      <h3>search</h3>
        <div>
            <input 
              value={newFilter}
              onChange={(event) => {
                handleFilterChange(event)
                filterResults(event.target.value.toLowerCase())
              }}
            />
        </div>

      <h2>add people</h2>
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
        {newPersonList.map((person, i) =>
          <Person key={i} person={person}/>
        )}
      </ul>

    </div>
  )
}

export default App;
