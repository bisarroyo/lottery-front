import React from 'react'
import Box from '@components/Box'

const GamesList = (props) => {
  return (
    <div>
      <div>
        <Box
          route='one'
          title='Uno'
          description='Selecciona un número del 1 al 100 y si haciertas el número ganas.'
          icon='🎮'
        />
        <Box
          route='express'
          title='Express'
          description='Selecciona un número del 1 al 100, de inmediato te daras cuenta si ganas.'
          icon='🎮'
        />
        <Box
          route='lotto'
          title='Lotto'
          description='Selecciona 5 números del 1 al 100, si haciertas los números en orden ganas.'
          icon='🎮'
        />
        <Box
          route='bingo'
          title='Bingo'
          description='Puedes personalizar un cartón de bingo y cada día se jugarán por premios en efectivo.'
          icon='🎮'
        />
      </div>
    </div>
  )
}

export default GamesList
