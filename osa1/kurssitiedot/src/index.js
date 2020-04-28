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
       <Part part = {props.part1} exercises = {props.exercises1} />
       <Part part = {props.part2} exercises = {props.exercises2} />
       <Part part = {props.part3} exercises = {props.exercises3} />
    </div>
  )
}

const Total = (props) => {

  return (
    <div>
      <p>
      {props.exercisesTitle} {props.totalExercises}
      </p>
    </div>
  )
}

const App = () => {

  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const exercisesTitle = 'Number of exercises'

  return (
    <div>
      <Header course = { course } />
      <Content part1 = {part1.name} exercises1 = {part1.exercises}
               part2 = {part2.name} exercises2 = {part2.exercises}
               part3 = {part3.name} exercises3 = {part3.exercises} />
      <Total exercisesTitle = {exercisesTitle}
             totalExercises = {
                 part1.exercises
               + part2.exercises
               + part3.exercises
             } />
    </div>
  )

  /**
   * <Content part1 = {part1} exercises1 = {exercises1}
               part2 = {part2} exercises2 = {exercises2}
               part3 = {part3} exercises3 = {exercises3} />
      <Total exercisesTitle = {exercisesTitle}
             totalExercises = {totalExercises} />
   */
}

ReactDOM.render(<App />, document.getElementById('root'))