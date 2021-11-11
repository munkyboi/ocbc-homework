import axios from 'axios'

export const setAuthorizationHeader = (token) => {
  const Authorization = `${token}`
  localStorage.setItem('Authorization', Authorization)
  axios.defaults.headers.common['Authorization'] = Authorization
}