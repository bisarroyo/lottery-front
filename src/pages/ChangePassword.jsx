import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { logout, changePassword } from '@Api'

const ChangePassword = () => {
  const [values, setValues] = useState({
    password: '',
    password2: '',
    error: '',
    loading: false,
    success: false,
    token: ''
  })

  const { password, password2, error, loading, success, token } = values

  const navigate = useNavigate()
  useEffect(() => {
    if (success) {
      navigate('/signin')
    }
  }, [success])

  const handleChange = (event) => {
    setValues({ ...values, error: false, [event.target.name]: event.target.value })
  }

  const clickSubmit = (e) => {
    e.preventDefault()
    logout()
    if (password !== password2) {
      setValues({ ...values, error: 'Contraseñas no coinciden', success: false })
    } else {
      setValues({ ...values, error: '', loading: true })
      changePassword({ token, password })
        .then(data => {
          if (data.error) {
            setValues({ ...values, error: data.error, success: false })
          } else {
            setValues({ ...values, success: true })
          }
        })
    }
  }

  console.log(window.location.href.split('/')[4])
  const tokenFromUrl = window.location.href.split('/')[4]
  setValues({ ...values, token: tokenFromUrl })

  return (
    <>
      <form className='signin-box'>
        <div className='form-group'>
          <label htmlFor='password'>Contraseña</label>
          <input
            type='password'
            value={password}
            name='password'
            id='password'
            className='form-control'
            placeholder='Contraseña'
            autoComplete='off'
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password2'>Confirmar contraseña</label>
          <input
            type='password'
            value={password2}
            name='password2'
            id='password2'
            className='form-control'
            placeholder='Confirmar contraseña'
            autoComplete='off'
            onChange={handleChange}
          />
        </div>
        <button
          className='btn btn-primary'
          onClick={clickSubmit}
          disabled={loading}
        >
          {loading ? (<span>Loading...</span>) : (<span>Cambiar contraseña</span>)}
        </button>
        <span className='text-danger'>{error}</span>
      </form>
    </>
  )
}

export default ChangePassword
