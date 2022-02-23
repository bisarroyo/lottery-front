import React from 'react'
import Button from '@mui/material/Button'
import ButtonStyle from '@styles/ButtonStyle'

const ButtonPrimary = (props) => {
  const { clickSubmit, loading, text } = props
  return (
    <ButtonStyle>
      <Button
        variant='contained'
        className='btn btn-primary'
        onClick={clickSubmit}
        disabled={loading}
      >
        {loading ? (<span>Loading...</span>) : (<span>{text}</span>)}
      </Button>
    </ButtonStyle>
  )
}

export default ButtonPrimary
