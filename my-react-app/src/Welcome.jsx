import React from 'react'

const Welcome = (props) => {
    console.log(props)
  return (
    <div>Welcome My name is {props?.name}</div>
  )
}

export default Welcome