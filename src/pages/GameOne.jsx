import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import Button from '@components/Button'
import OneStyle from '@styles/One.js'

const GameOne = () => {
  const [number, setNumber] = useState([])

  const numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]

  const addNumber = (num) => {
    setNumber([...number, num])
  }
  const removeNumber = (num) => {
    setNumber(number.filter(item => item !== num))
  }
  return (
    <OneStyle>
      <h1>Game One</h1>
      <p>Description</p>
      <Accordion>
        <AccordionSummary>
          <Typography>
            Toca aquí para seleccionar los números a jugar
          </Typography>
        </AccordionSummary>
        <AccordionDetails className='number-container'>
          {numArr.map((num) => (
            <Button
              key={num}
              handleClick={() => addNumber(num)}
              text={num}
              disabled={number.includes(num)}
            />
          ))}
        </AccordionDetails>
      </Accordion>
      <div>
        <h2>Números seleccionados</h2>
        <p>Toca un número si quieres eliminarlo de tu lista.</p>
        <div className='number-container'>
          {number.sort((a, b) => a - b).map((num) => (
            <Button
              key={num}
              handleClick={() => removeNumber(num)}
              text={num}
            />
          ))}
        </div>
      </div>
      <Button
        handleClick={() => console.log(number)}
        text='Proceder con el juego'
      />
    </OneStyle>
  )
}

export default GameOne
