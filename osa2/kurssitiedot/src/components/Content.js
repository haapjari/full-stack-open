import React from 'react'
import Header from './Header'

const Content = (props) => {

    const courses = props.course;

    /*
    console.log( courses[0].name )
    console.log( courses[0].parts[0].name )
    console.log( courses[0].parts[0].exercises )

    console.log( courses[1].name )
    console.log( courses[1].parts[0].name )
    console.log( courses[1].parts[0].exercises )
    console.log( courses[1].parts[1].name )
    console.log( courses[1].parts[1].exercises )
    */

    /*
    var i = 0
    var courseData = courses.map(function(element) {
      return element.parts[i].name + ' ' + element.parts[i].exercises
    })
    */

    var courseData = []

    for (var i = 0; i < courses.length; i++) {
      // console.log(courses[i].parts[0].name )
      // courses[i].parts[j].length
      // console.log(courses[0].parts.length)
      var appendData = []
      appendData.push(courses[i].name)
      courseData.push(appendData)
      // courseData[i].push(childData)

      for (var j = 0; j < courses[i].parts.length; j++) {

          // courseData[i].push(<p key={courses[i].parts[j].name}>{courses[i].parts[j].name + ' ' + courses[i].parts[j].exercises}</p>)
          courseData[i].push(<p key={courses[i].parts[j].name}>{courses[i].parts[j].name + ' ' + courses[i].parts[j].exercises}</p>)

      }

    }

    // console.log(courseData)
    // console.log(courseData[0])
    
    // var courseData = 0
   
    /*
      var names = animals.map(function(animal) {
        return animal.name + ' is a ' + animal.species
    })
    */

    return (
      <div>
          {courseData}
      </div>
    )
  }

export default Content;