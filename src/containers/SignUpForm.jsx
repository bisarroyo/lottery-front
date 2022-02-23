import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { signup, authenticate, logout } from '../Api/apiCore'
import Input from '@components/Input'
import Button from '@components/Button'
import FormStyle from '@styles/FormStyle'

const SignUpForm = () => {
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
    <FormStyle>
      <div className='form-group'>
        <Input
          label='Nombre'
          type='text'
          placeholder='Juan'
          handleValue={name}
          handleChange={handleChange}
        />
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
        <Input
          label='Confirmar contraseña'
          type='password'
          placeholder='********'
          handleValue={password2}
          handleChange={handleChange}
        />
        <Button
          clickSubmit={clickSubmit}
          text='Registrarme'
          loading={loading}
        />
        <span className='text-danger'>{error}</span>
      </div>
    </FormStyle>
  )
}

export default SignUpForm
