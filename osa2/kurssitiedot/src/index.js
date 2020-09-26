import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {

  return (
    <div>
        <h1>
          {props.course.name}
        </h1>
    </div>
  )
}

const Content = (props) => {

  return (
    <div>
      <p>
        {props.course.parts[0].name} {props.course.parts[0].exercises} <br /> <br />
        {props.course.parts[1].name} {props.course.parts[1].exercises} <br /> <br />
        {props.course.parts[2].name} {props.course.parts[2].exercises} <br /> 
      </p>
    </div>
  )
}

const Total = (props) => {

  return (
    <div>
      <p>
      {"Number of exercises"} {props.course.parts[0].exercises +
                               props.course.parts[1].exercises + 
                               props.course.parts[2].exercises}
      </p>
    </div>
  )
}

const App = () => {

  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (

    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))