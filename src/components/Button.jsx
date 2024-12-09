import React from 'react'

const Button = ({title, onClick, className}) => {
  return (
    <>
      <button onClick={onClick}>{title}</button>
      
    </>
  )
}

export default Button
