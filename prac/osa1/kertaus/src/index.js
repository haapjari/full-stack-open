import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {

  const ika = 20
  const nimi = "Aku"

  // console.log('Hello from komponentti')
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Iines" age={ika}/>
      <Hello name={nimi} age={ika}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))