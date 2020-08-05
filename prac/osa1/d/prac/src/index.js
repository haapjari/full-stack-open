import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [value, setValue] = useState(10)

  const handleClick = () => {
    console.log('clicked the button')
    setValue(0)
  }

  const addition = () => {
    console.log('clicked the button')
    setValue(value + 1)
  }

  return (
    <div>
      {value}
      <button onClick={handleClick}>reset to zero</button>
      <button onClick={addition}>add one</button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))