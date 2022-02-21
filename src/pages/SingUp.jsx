import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { signup, authenticate, logout } from '../Api/apiCore'

const SingUp = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    error: '',
    loading: false,
    success: false
  })

  const { name, email, password, password2, error, success, loading } = values

  const navigate = useNavigate()

  const handleChange = (event) => {
    setValues({ ...values, error: false, [event.target.name]: event.target.value })
  }

  useEffect(() => {
    if (success) {
      navigate('/singin')
    }
  }, [success])

  const clickSubmit = (e) => {
    e.preventDefault()
    logout()
    if (password !== password2) {
      setValues({ ...values, error: 'Contraseñas no coinciden', success: false })
    } else {
      setValues({ ...values, error: '', loading: true })
      signup({ name, email, password })
        .then(data => {
          if (data.error) {
            setValues({ ...values, error: data.error, success: false })
          } else {
            setValues({ ...values, success: true })
            authenticate(data, () => {
              setValues({
                ...values,
                name: '',
                email: '',
                password: '',
                password2: '',
                error: '',
                loading: false,
                success: true
              })
            })
          }
        })
    }
  }

  return (
    <>
      <form className='signin-box'>
        <div className='form-group'>
          <label htmlFor='name'>Nombre</label>
          <input
            type='name'
            value={name}
            name='name'
            id='name'
            className='form-control'
            placeholder='name'
            autoComplete='on'
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Correo electrónico</label>
          <input
            type='email'
            value={email}
            name='email'
            id='email'
            className='form-control'
            placeholder='Correo electrónico'
            autoComplete='on'
            onChange={handleChange}
          />
        </div>
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
          {loading ? (<span>Loading...</span>) : (<span>Registrarme</span>)}
        </button>
        <span className='text-danger'>{error}</span>
      </form>
    </>
  )
}

export default SingUp
