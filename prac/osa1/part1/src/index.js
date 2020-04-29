import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = ( {counter} ) => <div>{counter}</div>

const Button = ( {text, handleClick} ) => <button onClick={handleClick}>{text}</button>

const App = (props) => {
  const [ counter, setCounter ] = useState(0)
  const increaseByOne = () => setCounter(counter + 1)
  const decreasedByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
      <Button
        handleClick={increaseByOne}
        text='plus'
      />
      <Button 
        handleClick={setToZero}
        text='zero'
      />
      <Button 
        handleClick={decreasedByOne}
        text='minus'
      />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)