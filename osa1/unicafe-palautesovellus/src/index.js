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

  // Variables END

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setToGood(good + 1)}>good</button>
      <button>neutral</button>
      <button>bad</button>

      <h1>statistics</h1>
      <p>good</p>{good}
      <p>neutral</p>{neutral}
      <p>bad</p>{bad}
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);