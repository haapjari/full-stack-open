import React from 'react'

const Total = (props) => {

    var length = props.course.parts.length;
    var totalExercises = 0;

    for (var i = 0; i < length; i++) {
        totalExercises += props.course.parts[i].exercises;
    }

    return (
      <div>
        <b>Number of exercises: {totalExercises} </b>
      </div>
    )
  }

export default Total;