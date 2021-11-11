import React from 'react'
import { Route, Redirect } from 'react-router-dom'

// REDUX
import { useSelector } from 'react-redux'
import { getUserState } from '@Slices/userSlice'

const AuthRoute = ({ component: Component, ...rest }) => {
  const { authenticated } = useSelector(getUserState)
  return (
    <Route {...rest}>
      {authenticated ?
        <Component /> : 
        <Redirect to='/login' />
      }
    </Route>
    //   {...rest}
    //   render={(props) => {
    //     if (!authenticated) {
    //       return <Redirect to='/login' />
    //     } else {
    //       return <Component />
    //     }
    //   }}
    // />
  )
}

export default React.memo(AuthRoute)
