import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {

  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old.
      </p>
    </div>
  )
}

const Footer = () => {

  return (
    <div>
      Greeting App Created by: 
      <a href="https://github.com/haapjari"> haapjari</a>
    </div>
  )
}

const App = () => {
  const nimi = "Darra"
  const ika = 25

  return (
    // <div>
    <>
      <h1>Greetings</h1>
      <Hello name = "Vappu" age = {18+10}/>
      <Hello name={nimi} age={ika}/>
      <Footer />
    </>
      // </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))