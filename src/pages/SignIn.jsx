import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signin, authenticate, isAuthenticated } from '../Api/apiCore'

const SignIn = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    error: '',
    loading: false,
    redirectToReferrer: false
  })
  const { email, password, error, loading, redirectToReferrer } = values
  const { user } = isAuthenticated()

  const navigate = useNavigate()

  const redirectUser = () => {
    if (redirectToReferrer) {
      if (user && user.role === 1) {
        navigate('/admin/dashboard')
      } else {
        navigate('/')
      }
    }
    if (isAuthenticated()) {
      navigate('/')
    }
  }

  const handleChange = (event) => {
    setValues({ ...values, error: false, [event.target.name]: event.target.value })
  }

  const clickSubmit = (e) => {
    e.preventDefault()
    setValues({ ...values, error: '', loading: true })
    signin({ email, password })
      .then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false })
        } else {
          authenticate(
            data, () => {
              setValues({ ...values, error: '', redirectToReferrer: true })
            }
          )
        }
      })
  }

  return (
    <>
      <form className='signin-box'>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            className='form-control'
            placeholder='Email'
            autoComplete='off'
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            className='form-control'
            placeholder='Password'
            autoComplete='off'
            value={password}
            onChange={handleChange}
          />
        </div>
        <button
          className='btn btn-primary'
          onClick={clickSubmit}
          disabled={loading}
        >
          {loading && (
            <span>Cargando</span>
          )}
          <span>Sign In</span>
        </button>
        <span className='text-danger'>{error}</span>
      </form>
      {redirectUser()}
    </>
  )
}

export default SignIn
