import React , { useState } from 'react';
import ReactDOM from 'react-dom';

/**
 * @author haapjari (www.github.com/haapjari)
 * @version 13.8.2020
 * This is a assignment React Application of Full-Stack Open (www.fullstackopen.fi)
 */

// Components START

const Button = (props) => {
  console.log("Hello World")
  return null
}

/**
 * Exercise: 1.8
 * Component that handles Statistics
 * @param {*} good Feedbacks as "good"
 * @param {*} neutral Feedbacks as "neutral"
 * @param {*} bad Feedbacks as "bad"
 */
const Statistics = (props) => {

  const totalGood = props.good * 1
  const totalBad = props.bad * (-1)
  const totalNeutral = props.neutral
  const totalFeedback = props.good + props.neutral + props.bad 

  /**
   * Function calculates Feedback Average
   * @param {*} good equals +1
   * @param {*} neutral equals 0
   * @param {*} bad equals -1
   */
  const calcAvg = () => {
    const totalSum = (totalGood + totalBad) / totalFeedback
    
    return totalSum
  }

  /**
   * This Function Calculates Positive % of all Feedback
   * @param {*} good Feedbacks as "good"
   * @param {*} neutral Feedbacks as "neutral"
   * @param {*} bad Feedbacks as "bad"
   */
  const calcPositive = () => {

    const positivePercentage = totalGood / totalFeedback
    return positivePercentage * 100
  }

  return (
    <div>
      <h1>statistics</h1>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.good + props.neutral + props.bad}</p>
      <p>average {calcAvg(props.good, props.neutral, props.bad)}</p>
      <p>positive {calcPositive(props.good, props.neutral, props.bad)} %</p>
    </div>
  )
  
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

  // Variables and Functions END

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setToGood(good + 1)}>good</button>
      <button onClick={() => setToNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setToBad(bad + 1)}>bad</button>
      
      <Statistics good={good} neutral={neutral} bad={bad}/>
      <Button />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);