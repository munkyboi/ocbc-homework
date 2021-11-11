import axios from 'axios'

export const setAuthorizationHeader = (token) => {
  const Authorization = `${token}`
  localStorage.setItem('Authorization', Authorization)
  axios.defaults.headers.common['Authorization'] = Authorization
}

// observer for viewport sizes
export const viewportObserver = () => {
  const vh = window.innerHeight * 0.01;
  const vw = window.innerWidth * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  document.documentElement.style.setProperty('--vw', `${vw}px`);
}