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
