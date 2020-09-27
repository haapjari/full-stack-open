import React from 'react'

const Header = (props) => {

  return (
    <div>
        <h1>
          {props.course.name}
        </h1>
    </div>
  )
}
export default Header;