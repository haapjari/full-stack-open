import React, { useState, useEffect } from 'react'
import PersonForm from './PersonForm'
import Search from './Search'
import NumberList from './NumberList'
import personService from '../services/persons'

const App = ( props ) => {

  
  const [persons, setPersons] = useState ([])

  // newName state is meant for controlling the form input element
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [newPersonList, setNewPersonList] = useState([])

  /* ------------------------------------------------- */

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
        // setNewPersonList(initialPersons)
      })
  }, [])

  /* ------------------------------------------------- */

      const handleNameChange = (event) => {
        setNewName(event.target.value)
      }

      const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
      }

      const handleFilterChange = (event) => {
        setNewFilter(event.target.value)
      }

      /* ------------------------------------------------- */


      /* ------------------------------------------------- */

      const addName = (event) => {
        event.preventDefault()
  
        /* create new object for the person, which will receive its content from components newName state */ 
        const personObject = {
          name: newName.trim(),
          number: newNumber,
          // id: persons.length + 1,
        }
        
        var checkValue = 0 // very gross way to implement this
        for (var i = 0; i < persons.length; i++) {
  
          // loop over the array, if there is match - truth value to 1
          if (persons[i].name === personObject.name) {
            checkValue = 1
          } 
  
        }
  
        // exercute this if truth value is 1, if its not add person to phone book
        if (checkValue === 1) {
          alert(`${newName} is already added to phonebook`)
          setNewName('') 
          setNewNumber('')
        } else {
          // setPersons(persons.concat(personObject))
          /* staten päivitys */
          // setNewPersonList(persons.concat(personObject))

          /*
          axios
          .post('http://localhost:3001/persons', personObject)
          .then(response => {
              console.log(response)
              setPersons(persons.concat(personObject))
              setNewPersonList(persons.concat(personObject))
          })
          */

          personService
          .create(personObject)
              .then(returnedPerson => {
              setPersons(persons.concat(returnedPerson))
              // setNewPersonList(persons.concat(returnedPerson))
              setNewName('') 
              setNewNumber('')
          })

          console.log(`${newName} succesfully added to phonebook`)
          setNewName('')
          setNewNumber('')
        }

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
          addName={addName}
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
