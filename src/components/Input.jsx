import React from 'react'
import TextField from '@mui/material/TextField'
import InputStyle from '@styles/InputStyle'

const Input = (props) => {
  const { label, type, placeholder, handleValue, handleChange } = props
  return (
    <InputStyle>
      <TextField
        label={label}
        variant='standard'
        name={type}
        type={type}
        className='form-control'
        placeholder={placeholder}
        autoComplete='off'
        value={handleValue}
        onChange={handleChange}
      />
    </InputStyle>
  )
}

export default Input
