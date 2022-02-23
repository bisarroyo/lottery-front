import React, { useEffect, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { signin, authenticate, isAuthenticated } from '@Api'
import AppContext from '@context/AppContext'
import Input from '@components/Input'
import Button from '@components/Button'
import FormStyle from '@styles/FormStyle'

const SignInForm = () => {
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
    <FormStyle>
      <div className='form-group'>
        <Input
          label='Correo electrónico'
          type='email'
          placeholder='you@domain.com'
          handleValue={email}
          handleChange={handleChange}
        />
        <Input
          label='Contraseña'
          type='password'
          placeholder='********'
          handleValue={password}
          handleChange={handleChange}
        />
        <Button
          clickSubmit={clickSubmit}
          text='Iniciar sesión'
          loading={loading}
        />
        <Link to='/recovery' className='link'>
          Olvidé mi contraseña
        </Link>
        <span className='text-danger'>{error}</span>
      </div>
    </FormStyle>
  )
}

export default SignInForm
