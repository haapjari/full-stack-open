import React from 'react'

const Content = (props) => {

    var courseData = [];
    var length = props.course.parts.length;

    for (var i = 0; i < length; i++) {
        courseData.push(<p key={i}>{props.course.parts[i].name} {props.course.parts[i].exercises}</p>)
    }

    return (
      <div>
          {courseData}
      </div>
    )
  }

export default Content;