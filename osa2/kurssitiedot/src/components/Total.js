import React from 'react'

function myAddition(total, num) {
    return total + num;
}

const Total = (props) => {

    var length = props.course.parts.length;
    var totalExercises = 0;
    var numbers = []

    for (var i = 0; i < length; i++) {
        numbers.push(props.course.parts[i].exercises);
    }

    totalExercises = numbers.reduce(myAddition);

    return (
      <div>
        <b>Number of exercises: {totalExercises} </b>
      </div>
    )
  }

export default Total;