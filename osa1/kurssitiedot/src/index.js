import React from 'react'
import ReactDOM from 'react-dom'

const Part = (props) => {

  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  )
}

const Header = (props) => {

  return (
    <div>
        <h1>
          {props.course}
        </h1>
    </div>
  )
}

const Content = (props) => {

  return (
    <div>
      <p>
        {props.parts[0].name} {props.parts[0].exercises} <br /> <br />
        {props.parts[1].name} {props.parts[1].exercises} <br /> <br />
        {props.parts[2].name} {props.parts[2].exercises} <br /> 
      </p>
    </div>
  )
}

const Total = (props) => {
 { /* {props.exercisesTitle} {props.totalExercises} */}
  return (
    <div>
      <p>
      {"Number of exercises"} {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
      </p>
    </div>
  )
}

const App = () => {

  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  const exercisesTitle = 'Number of exercises'
  const totalExercises = parts[0].exercises + parts[1].exercises + parts[2].exercises

  return (

    <div>
      <Header course = {course} />
      <Content parts = {parts} />
      <Total parts = {parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))