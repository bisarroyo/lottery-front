import { useState } from 'react'

const initialState = {
  name: '',
  email: '',
  password: '',
  password2: '',
  error: '',
  loading: false,
  token: '',
  redirectToReferrer: false
}

const useInitialState = () => {
  const [userData, setUserData] = useState(initialState)

  // Reset state

  const resetState = () => {
    setUserData(initialState)
  }

  // set user user data

  const setUser = (data) => {
    setUserData({
      ...userData,
      name: data.name,
      email: data.email,
      password: data.password,
      password2: data.password2
    })
  }

  // Set error

  const setError = (error) => {
    setUserData({
      ...userData,
      error: error
    })
  }

  // Set loading

  const setLoading = (loading) => {
    setUserData({
      ...userData,
      loading: loading
    })
  }

  // set tokendo

  const setToken = (token) => {
    setUserData({
      ...userData,
      token: token
    })
  }

  // Set redirect

  const setRedirect = (redirect) => {
    setUserData({
      ...userData,
      redirectToReferrer: redirect
    })
  }

  return {
    resetState,
    userData,
    setUser,
    setError,
    setLoading,
    setToken,
    setRedirect
  }
}

export default useInitialState
