import React , { useState } from 'react';
import ReactDOM from 'react-dom';

/**
 * @author haapjari (www.github.com/haapjari)
 * @version 12.8.2020
 * This is a assignment React Application of Full-Stack Open (www.fullstackopen.fi)
 */

// Components START

/**
 * Exercise: 1.8
 * Component that handles Statistics
 * @param {*} good Feedbacks as "good"
 * @param {*} neutral Feedbacks as "neutral"
 * @param {*} bad Feedbacks as "bad"
 */
const Statistics = (props) => {
  /*
   * TODO:
   *    - Extract Statistics to this Component 
   */
}

// Components END

/**
 * App Component
 * @param {*} props 
 */
const App = (props) => {

  // Variables and Functions START

  /**
   * State
   */
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

  /**
   * Function calculates Feedback Average
   * @param {*} good equals +1
   * @param {*} neutral equals 0
   * @param {*} bad equals -1
   */
  const calcAvg = (good, neutral, bad) => {
    
    const totalGood = good * 1
    const totalBad = bad * (-1)
    const totalFeedback = good + neutral + bad
    const totalSum = (totalGood + totalBad) / totalFeedback
    
    return totalSum
  }

  /**
   * This Function Calculates Positive % of all Feedback
   * @param {*} good Feedbacks as "good"
   * @param {*} neutral Feedbacks as "neutral"
   * @param {*} bad Feedbacks as "bad"
   */
  const calcPositive = (good, neutral, bad) => {

    const feedbackAmount = good + neutral + bad
    const positivePercentage = good / feedbackAmount
    return positivePercentage * 100
  }

  // Variables and Functions END

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