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
import { Alert } from '@mui/material'

// STYLES
import { RegisterPageContainer } from './RegisterPageStyles'

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, 'Username should be at least 4 character long')
    .required('Please type in your username'),
  password: Yup.string()
    .min(6, 'Password should be at least 6 character long')
    .required('Please type in your password'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Please type in your password')
})

const RegisterPage = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const bottomActions = [
    {
      key: 'register',
      id: 'register-button',
      type: 'submit',
      color: 'primary',
      variant: 'contained',
      label: 'Register',
      context: true
    },
  ]

  return (
    <RegisterPageContainer className="transition-item container">

      <Formik
        initialValues={{
          username: '',
          password: '',
          confirmPassword: ''
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
              url: `/register`,
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
              toast.success(`Thank you for signing up`)
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
              <PageHeader title="Register" backTo='/login' />
              <div className="form">

                <CustomTextField
                  name="username"
                  id="login-username"
                  label="Username"
                  variant="filled"
                  size="standard"
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!errors.username}
                  helperText={errors.username}
                  className="field"
                />

                <CustomTextField
                  type='password'
                  name="password"
                  id="login-password"
                  label="Password"
                  variant="filled"
                  size="standard"
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!errors.password}
                  helperText={errors.password}
                  className="field"
                />

                <CustomTextField
                  type='password'
                  name="confirmPassword"
                  id="login-confirm-password"
                  label="Confirm Password"
                  variant="filled"
                  size="standard"
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword}
                  className="field"
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
    </RegisterPageContainer>
  )
}

export default React.memo(RegisterPage)
