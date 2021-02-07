import React from 'react'
import Person from './Person'

const NumberList = props => {

    var newPersonList = props.newPersonList
   
    return (
       <div>
            <h2>Numbers</h2>
            <ul>
              {newPersonList.map((person, i) =>
              <Person key={i} person={person}/>
              )}
            </ul>
       </div>
    )
}

export default NumberList