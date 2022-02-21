import React, { useEffect, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { signin, authenticate, isAuthenticated } from '@Api'
import AppContext from '@context/AppContext'

const SignIn = () => {
  const {
    userData,
    setUser,
    setError,
    setLoading,
    setRedirect
  } = useContext(AppContext)

  const { email, password, error, loading, redirectToReferrer } = userData

  const { user } = isAuthenticated()

  // this function redirect the user if is logged in, if the user is is admin it redirect to the admin page
  const navigate = useNavigate()
  useEffect(() => {
    if (redirectToReferrer) {
      if (user && user.role === 'admin') {
        navigate('/admin/dashboard')
      } else {
        navigate('/')
      }
    }
    if (isAuthenticated()) {
      navigate('/')
    }
  }, [redirectToReferrer])

  const handleChange = (event) => {
    setUser({ ...userData, [event.target.name]: event.target.value })
  }

  const clickSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    signin({ email, password })
      .then(data => {
        if (data.error) {
          setError(data.error)
        } else {
          authenticate(
            data, () => {
              setRedirect(true)
              setLoading(false)
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
          {loading ? (<span>Loading...</span>) : (<span>Iniciar Sesón</span>)}
        </button>
        <Link to='/recovery'>
          Olvidé mi contraseña
        </Link>
        <span className='text-danger'>{error}</span>
      </form>
    </>
  )
}

export default SignIn
