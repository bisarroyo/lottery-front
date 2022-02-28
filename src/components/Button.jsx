import React from 'react'
import Button from '@mui/material/Button'
import ButtonStyle from '@styles/ButtonStyle'

const ButtonPrimary = (props) => {
  const { handleClick, disabled, text } = props
  return (
    <ButtonStyle>
      <Button
        variant='contained'
        className='btn btn-primary'
        onClick={handleClick}
        disabled={disabled}
      >
        <span>{text}</span>
      </Button>
    </ButtonStyle>
  )
}

export default ButtonPrimary
