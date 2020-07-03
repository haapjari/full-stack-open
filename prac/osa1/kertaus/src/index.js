import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {

    const bornYear = () => {
      
      const yearNow = new Date().getFullYear()
      return yearNow - props.age
    }

    return (
      <div>
        <p>
          Hello {props.name}, you are {props.age} years old
        </p>
        <p>So you were probably born {bornYear()}</p>
      </div>
    )
  }

const App = () => {

  const ika = 20
  const nimi = "Aku"

  console.log('Hello from komponentti')
  return (
    <div>
      {console.log("Hello")}
      <h1>Greetings</h1>
      <Hello name="Iines" age={ika}/>
      <Hello name={nimi} age={ika}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))