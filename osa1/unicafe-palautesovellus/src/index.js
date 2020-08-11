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

  const calcAvg = (good, neutral, bad) => {
    
    const totalGood = good * 1
    const totalBad = bad * (-1)
    const totalFeedback = good + neutral + bad
    const totalSum = (totalGood + totalBad) / totalFeedback
    
    return totalSum
  }

  const calcPositive = (good, neutral, bad) => {

    const feedbackAmount = good + neutral + bad
    const positivePercentage = good / feedbackAmount
    return positivePercentage * 100
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
      <p>all {good + neutral + bad}</p>
      <p>average {calcAvg(good, neutral, bad)}</p>
      <p>positive {calcPositive(good, neutral, bad)} %</p>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);