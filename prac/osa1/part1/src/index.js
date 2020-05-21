import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {

  const [left, setLeft] = useState(0)     // Alkuarvon saava tila left.
  const [right, setRight] = useState(0)   // Alkuarvon saava tila right.

  return (
    <div>
      <div>
        {left}
        <button onClick={() => setLeft(left + 1)}>
          left         
          { /* Tämä lukee napissa. */ } 
        </button> 
        <button onClick={() => setRight(right + 1)}>
          right
        </button>
        {right}
      </div>
    </div>
  )

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)