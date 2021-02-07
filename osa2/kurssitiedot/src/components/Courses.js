import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const Courses = (props) => {

    return (
      <div>
        <Header course={props.course} />
        <Content course={props.course} />
        {/* <Total course={props.course} /> */ }
      </div>
    )
  }

export default Courses;