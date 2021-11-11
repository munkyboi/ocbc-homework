import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom"
import AuthRoute from './Routers/AuthRoute';
import jwtDecode from 'jwt-decode'
import { ToastContainer } from 'react-toastify'
import { viewportObserver } from './Utils'

// REDUX
import { Provider, useDispatch } from 'react-redux'
import userSlice from './Redux/Slices/userSlice'
import store from './Redux/store'

// PAGES
import { TopNav } from './Common'
import { HomePage, TransferPage, LoginPage, RegisterPage } from './Pages'

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

const ProvidedApp = () => {
  const dispatch = useDispatch()
  const [ ready, setReady ] = React.useState(false)

  // Check for JWT if user was previously logged in
  React.useEffect(() => {

    (async() => {
      // listen for changes in viewport sizes
      viewportObserver()
      window.addEventListener('resize', viewportObserver)

      // check if localstorage has JWT
      const token = localStorage.Authorization
      if (token && token.length > 0) {
        const decodedToken = jwtDecode(token)
        const exp = (decodedToken.exp) * 1000
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

      console.log('aaaaaaaaaaaaaaaaaaaaaa')
      setReady(true)
    })()

    return (() => {
      window.removeEventListener('resize', viewportObserver)
    })
  }, []) // eslint-disable-line

  return (
    <>
      {ready &&
        <AppContainer>
          <TopNav />
          <BrowserRouter>
            <Switch>
              <AuthRoute path="/" component={HomePage} exact />
              <AuthRoute path="/transfer" component={TransferPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
              <Route>
                <div>404</div>
              </Route>
            </Switch>
          </BrowserRouter>
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
      }
    </>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ProvidedApp />
      </ThemeProvider>
    </Provider>
  )
}

export default React.memo(App)
