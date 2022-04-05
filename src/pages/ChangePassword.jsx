import React, { useEffect, useContext } from 'react'
import AppContext from '@context/AppContext'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { logout, changePassword } from '@Api'

const ChangePassword = () => {
  const {
    userData,
    setUser,
    setError,
    setLoading,
    setRedirect,
    setToken
  } = useContext(AppContext)

  const {
    password,
    password2,
    error,
    loading,
    redirectToReferrer,
    token
  } = userData

  const [searchParams, setSearchParams] = useSearchParams()

  console.log(searchParams)

  console.log(window.location.href.split('/')[4])
  const tokenFromUrl = window.location.href.split('/')[4]
  setToken(tokenFromUrl)

  const navigate = useNavigate()
  useEffect(() => {
    if (redirectToReferrer) {
      navigate('/signin')
    }
  }, [redirectToReferrer])

  const handleChange = (event) => {
    setUser({ ...userData, [event.target.name]: event.target.value })
  }

  const clickSubmit = (e) => {
    e.preventDefault()
    logout()
    if (password !== password2) {
      setError('Contraseñas no coinciden')
    } else {
      setLoading(true)
      changePassword({ token, password })
        .then(data => {
          if (data.error) {
            setError(data.error)
            setLoading(false)
          } else {
            setRedirect(true)
          }
        })
    }
  }

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
