import React , { useState } from 'react';
import ReactDOM from 'react-dom';

// Components START

const Button = () => {

}

// Components END

const App = (props) => {

  // Variables START

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = (newGood) => {
    setGood(newGood)
  }

  const setToNeutral = (newNeutral) => {
    setNeutral(newNeutral)
  }

  const setToBad = (newBad) => {
    setBad(newBad)
  }

  // Variables END

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setToGood(good + 1)}>good</button>
      <button onClick={() => setToNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setToBad(bad + 1)}>bad</button>

      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);