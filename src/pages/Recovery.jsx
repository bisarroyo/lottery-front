import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { recovery, logout } from '@Api'

const Recovery = () => {
  const [values, setValues] = useState({
    email: '',
    error: '',
    loading: false,
    redirectToReferrer: false
  })

  const { email, error, loading, redirectToReferrer } = values
  // this function redirect the user to login page
  const navigate = useNavigate()
  useEffect(() => {
    if (redirectToReferrer) {
      navigate('/singin')
    }
  }, [redirectToReferrer])

  const handleChange = (event) => {
    setValues({ ...email, [event.target.name]: event.target.value })
  }

  const clickSubmit = (e) => {
    e.preventDefault()
    logout()
    setValues({ ...values, loading: true, error: '' })
    recovery({ email })
      .then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false })
        } else {
          setValues({ ...values, redirectToReferrer: true })
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
        <button
          className='btn btn-primary'
          onClick={clickSubmit}
          disabled={loading}
        >
          {loading ? (<span>Loading...</span>) : (<span>Enviar correo</span>)}
        </button>
        <span className='text-danger'>{error}</span>
      </form>
    </>
  )
}

export default Recovery
