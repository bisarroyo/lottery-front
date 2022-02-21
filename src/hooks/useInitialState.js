import { useState } from 'react'

const initialState = {
  error: '',
  loading: false,
  email: '',
  password: '',
  redirectToReferrer: false
}

const useInitialState = () => {
  const [userData, setUserData] = useState(initialState)

  // Reset state

  const resetState = () => {
    setUserData(initialState)
  }

  // Set user data

  const setUser = (data) => {
    setUserData({
      ...userData,
      email: data.email,
      password: data.password
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
    setRedirect
  }
}

export default useInitialState
