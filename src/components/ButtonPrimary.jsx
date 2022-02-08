import React from 'react'

const ButtonPrimary = ({ children, onClick }) => (
  <button className='btn btn-primary' onClick={onClick}>
    {children}
  </button>
)

export default ButtonPrimary
