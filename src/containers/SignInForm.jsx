import React, { useEffect, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { signin, authenticate, isAuthenticated } from '@Api'
import AppContext from '@context/AppContext'
import Input from '@components/Input'
import Button from '@components/Button'
import FormStyle from '@styles/FormStyle'
import Loading from '@components/Loading'

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
        console.log(data)
        if (data.error) {
          setError(data.error)
          setLoading(false)
          console.log(data.error)
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
        <Button
          handleClick={clickSubmit}
          text='Iniciar sesión'
          disabled={loading}
        />
        <Link to='/recovery' className='link'>
          Olvidé mi contraseña
        </Link>
        <span className='text-danger'>{error}</span>
      </div>
      <Loading loading={loading} />
    </FormStyle>
  )
}

export default SignInForm
