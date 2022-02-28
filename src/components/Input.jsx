import React from 'react'
import TextField from '@mui/material/TextField'
import InputStyle from '@styles/InputStyle'

const Input = (props) => {
  const { label, name, type, placeholder, value, handleChange } = props
  return (
    <InputStyle>
      <TextField
        label={label}
        variant='standard'
        name={name}
        type={type}
        className='form-control'
        placeholder={placeholder}
        autoComplete='off'
        value={value}
        onChange={handleChange}
      />
    </InputStyle>
  )
}

export default Input
