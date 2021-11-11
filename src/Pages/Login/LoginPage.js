import React from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { setAuthorizationHeader } from '../../Utils'
import jwtDecode from 'jwt-decode'
import { toast } from 'react-toastify'

// FORMIK
import { Formik, Form } from 'formik'
import * as Yup from 'yup';

// REDUX
import { useDispatch } from 'react-redux'
import userSlice from '../../Redux/Slices/userSlice'

// COMPONENTS
import {
  BottomNav,
  PageHeader,
  ContentContainer,
  CustomTextField,
} from '../../Common'
import { Alert } from '@mui/material';

// STYLES
import { LoginPageContainer } from './LoginPageStyles'

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, 'Username should be at least 4 character long')
    .required('Please type in your username'),
  password: Yup.string()
    .min(6, 'Password should be at least 6 character long')
    .required('Please type in your password'),
})

const LoginPage = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const bottomActions = [
    {
      key: 'login',
      id: 'loginButton',
      type: 'submit',
      color: 'primary',
      variant: 'contained',
      label: 'Login',
      context: true,
    },
    {
      key: 'register',
      id: 'registerButton',
      type: 'link',
      to: '/register',
      variant: 'outlined',
      label: 'Register'
    },
  ]

  return (
    <LoginPageContainer className="transition-item container">

      <Formik
        initialValues={{
          username: '',
          password: ''
        }}
        // validateOnChange={true}
        // validateOnBlur={true}
        enableReinitialize={true}
        validationSchema={validationSchema}
        onSubmit={(data, {setErrors, setSubmitting}) => {
          (async() => {
            let errors = 0
            setSubmitting(true)
            await axios({
              url: `/login`,
              method: 'POST',
              data
            }).then(res => {
              setAuthorizationHeader(res.data.token)
              // decode JSON Web Token
              const decodedToken = jwtDecode(res.data.token)
              // update redux
              dispatch(userSlice.actions.setAuthenticated(true))
              dispatch(userSlice.actions.setUserInfo({
                userId: decodedToken.userId,
                username: decodedToken.username,
                accountNo: decodedToken.accountNo
              }))
              toast.success(`Welcome back, ${res.data.username}!`)
            }).catch(err => {
              errors += 1
              console.log(JSON.stringify(err))
              setErrors(err.response.data)
            })
            setSubmitting(false)

            if (errors === 0) {
              history.push('/')
            }
          })()
        }}
      >
        {({ handleChange, handleBlur, errors, isSubmitting, isValid, dirty, handleSubmit }) => (
          <Form>
            <ContentContainer>
              <PageHeader title="Login" />
              <div className="form">
                <CustomTextField
                  name="username"
                  id="loginForm-usernameField"
                  label="Username"
                  variant="filled"
                  size="standard"
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!errors.username}
                  helperText={errors.username}
                  className="field"
                  disabled={isSubmitting}
                />
                <CustomTextField
                  type='password'
                  name="password"
                  id="loginForm-passwordField"
                  label="Password"
                  variant="filled"
                  size="standard"
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!errors.password}
                  helperText={errors.password}
                  className="field"
                  disabled={isSubmitting}
                />
                {errors.status === 'failed' &&
                  <Alert severity="error">{errors.error}</Alert>
                }
              </div>
            </ContentContainer>
            <BottomNav
              actions={bottomActions}
              handleSubmit={handleSubmit}
              disabled={!(dirty && isValid) || isSubmitting}
              isSubmitting={isSubmitting}
            />
          </Form>
        )}
      </Formik>
    </LoginPageContainer>
  )
}

export default React.memo(LoginPage)
