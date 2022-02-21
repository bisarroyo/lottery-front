import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { logout } from '../Api/apiCore'
import AppContext from '@context/AppContext'

const LogOut = () => {
  const { resetState } = useContext(AppContext)
  const navigate = useNavigate()
  useEffect(() => {
    logout()
    navigate('/')
    resetState()
  }, [])

  return (
    <div>
      <h1>LogOut</h1>
    </div>
  )
}

export default LogOut
