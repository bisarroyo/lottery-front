import axios from 'axios'
import env from 'react-dotenv'

export const signin = (user) => {
  return axios(
    {
      method: 'POST',
      url: `${env.API_URL}api/v1/users/signin`,
      data: user,
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }
  )
    .then(res => {
      return res.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const signup = (user) => {
  return axios(
    {
      method: 'POST',
      url: `${env.API_URL}api/v1/users/signup`,
      data: user,
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }
  )
    .then(res => {
      return res.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const authenticate = (data, next) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('jwt', JSON.stringify(data))
    next()
  }
}

export const isAuthenticated = () => {
  if (typeof window === 'undefined') {
    return false
  }
  if (window.localStorage.getItem('jwt')) {
    return JSON.parse(window.localStorage.getItem('jwt'))
  }
  return false
}
