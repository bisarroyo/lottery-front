import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AppContext from '@context/AppContext'
import { signup, authenticate, logout } from '../Api/apiCore'
import Input from '@components/Input'
import Button from '@components/Button'
import FormStyle from '@styles/FormStyle'

const SignUpForm = () => {
  const {
    userData,
    setUser,
    setError,
    setLoading,
    setRedirect
  } = useContext(AppContext)

  const {
    name,
    email,
    password,
    password2,
    error,
    loading,
    redirectToReferrer
  } = userData

  const navigate = useNavigate()

  const handleChange = (event) => {
    setUser({ ...userData, [event.target.name]: event.target.value })
  }

  useEffect(() => {
    if (redirectToReferrer) {
      navigate('/singin')
    }
  }, [redirectToReferrer])

  const clickSubmit = (e) => {
    e.preventDefault()
    logout()
    if (password !== password2) {
      setError('Contraseñas no coinciden')
    } else {
      setLoading(true)
      signup({ name, email, password })
        .then(data => {
          if (data.error) {
            setError(data.error)
            setLoading(false)
          } else {
            authenticate(data, () => {
              setRedirect(true)
              setLoading(false)
            })
          }
        })
    }
  }
  return (
    <FormStyle>
      <div className='form-group'>
        <Input
          label='Nombre'
          name='name'
          type='text'
          placeholder='Juan'
          value={name}
          handleChange={handleChange}
        />
        <Input
          label='Correo electrónico'
          name='email'
          type='email'
          placeholder='you@domain.com'
          value={email}
          handleChange={handleChange}
        />
        <Input
          label='Contraseña'
          name='password'
          type='password'
          placeholder='********'
          value={password}
          handleChange={handleChange}
        />
        <Input
          label='Confirmar contraseña'
          name='password2'
          type='password'
          placeholder='********'
          value={password2}
          handleChange={handleChange}
        />
        <Button
          handleClick={clickSubmit}
          text='Registrarme'
          disabled={loading}
        />
        <span className='text-danger'>{error}</span>
      </div>
    </FormStyle>
  )
}

export default SignUpForm
