import React from 'react'
import { Link } from 'react-router-dom'

import Ul from './Styles'

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <Link to='/' className='link'>Inicio</Link>
      </li>
      <li>
        <Link to='/signup' className='link'>Registrarme</Link>
      </li>
      <li>
        <Link to='/signin' className='link'>Iniciar Sesión</Link>
      </li>
      <li>
        <Link to='/logout' className='link'>Cerrar Sesión</Link>
      </li>
    </Ul>
  )
}

export default RightNav
