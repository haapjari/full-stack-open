import React, { useState } from 'react'
import ReactDOM from 'react-dom'

/**
 * Feedback Button
 * @param {*} props 
 */
const Button = (props) => {
  
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )  
}

const Anecdote = (props) => {

  return (
    <div>
      <p>Anecdote Component</p>
    </div>
  )
}

const App = (props) => {

  const [selected, setSelected] = useState(0)

  const showNextAnecdote = () => {
    console.log('clicked showNextAnecdote')
  }

  const handleClick = () => {
    console.log('clicked the button')
  }

  const randomNumber = () => {
    return (
      Math.floor(Math.random() * 6)
    )
  }

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>{props.anecdotes[selected]}</td>
          </tr>
          <tr>
            <td><Button handleClick={() => setSelected(randomNumber())} text="next anecdote"/></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)