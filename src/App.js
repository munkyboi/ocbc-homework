import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import AuthRoute from './Routers/AuthRoute';
import jwtDecode from 'jwt-decode'
import { ToastContainer } from 'react-toastify'

// REDUX
import { useDispatch } from 'react-redux'
import userSlice from '@Slices/userSlice'

// PAGES
import { HomePage, TransferPage, LoginPage, RegisterPage } from '@Pages'

// STYLES
import { AppContainer } from './AppStyles'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import 'react-toastify/dist/ReactToastify.min.css'

const theme = createTheme({
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontSize: 12,
  },
});

const App = () => {
  const dispatch = useDispatch()
  const [ ready, setReady ] = React.useState(false)

  // Check for JWT if user was previously logged in
  React.useEffect(() => {
    (async() => {
      const token = localStorage.Authorization
      if (token && token.length > 0) {
        const decodedToken = jwtDecode(token)
        const exp = (decodedToken.exp) * 1000
        console.log(Date.now(), exp, Date.now() > exp)
        // check if token has expired
        if (Date.now() > exp) {
          console.log('token has expired...')
          dispatch(userSlice.actions.setAuthenticated(false))
          localStorage.removeItem('Authorization')
        } else {
          dispatch(userSlice.actions.setAuthenticated(true))
          dispatch(userSlice.actions.setUserInfo({
            userId: decodedToken.userId,
            username: decodedToken.username,
            accountNo: decodedToken.accountNo
          }))
        }
      }

      setReady(true)
    })()
  }, []) // eslint-disable-line

  return (
    <>
      {ready &&
        <ThemeProvider theme={theme}>
          <AppContainer>
            <Router>
              <Switch>
                <AuthRoute path="/" component={HomePage} exact />
                <AuthRoute path="/transfer" component={TransferPage} exact />
                <Route path="/login" component={LoginPage} exact />
                <Route path="/register" component={RegisterPage} exact />
              </Switch>
            </Router>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </AppContainer>
        </ThemeProvider>
      }
    </>
  )
}

export default App
