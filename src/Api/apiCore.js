import axios from 'axios'

export const signin = (user) => {
  return axios(
    {
      method: 'POST',
      url: 'http://localhost:3000/api/v1/auth/signin',
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
      url: 'http://localhost:3000/api/v1/auth/signup',
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

export const logout = () => {
  window.localStorage.removeItem('jwt')
  return axios(
    {
      method: 'GET',
      url: 'http://localhost:3000/api/v1/auth/signout',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }
  )
    .then(res => {
      return res.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const recovery = (email) => {
  return axios(
    {
      method: 'POST',
      url: 'http://localhost:3000/api/v1/auth/recovery',
      data: email,
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(email)
    }
  )
    .then(res => {
      return res.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const changePassword = (data) => {
  return axios(
    {
      method: 'POST',
      url: 'http://localhost:3000/api/v1/auth/reset',
      data: data,
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
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
