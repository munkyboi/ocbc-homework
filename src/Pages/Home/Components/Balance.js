import React from 'react'
import NumberFormat from 'react-number-format'
import axios from 'axios'

// REDUX
import { useDispatch, useSelector } from 'react-redux'
import userSlice, { getUserState } from '../../../Redux/Slices/userSlice'

// COMPONENTS
import { Typography } from '@mui/material'

const Balance = () => {
  const token = localStorage.Authorization
  const dispatch = useDispatch()
  const [ ready, setReady ] = React.useState(false)

  const { userInfo } = useSelector(getUserState)

  const fetchBalance = async () => {
    await axios({
      url: `/balance`,
      headers: {
        Authorization: token
      }
    }).then(res => {
      dispatch(userSlice.actions.updateUserInfo(res.data))
    }).catch(err => {
      console.log(JSON.stringify(err))
    })
  }

  React.useEffect(() => {
    (async() => {
      await fetchBalance()
    })()
  }, []) // eslint-disable-line

  React.useEffect(() => {
    if (userInfo) {
      setReady(true)
    }
  }, [userInfo])

  return (
    <>
        {ready ?
          <>
            <Typography variant="h6" className="title" aria-label='Home Title'>You Have</Typography>
            <Typography variant="h4" className="amount">
              {userInfo && userInfo.balance ?
                <>
                  <span className='symbol'>S$</span>
                  <NumberFormat decimalScale={2} fixedDecimalScale={true} value={userInfo.balance} displayType={'text'} thousandSeparator={true} />
                </> : 
                <>...</>
              }
            </Typography>
            <Typography variant="subtitle1" className="label">Account No</Typography>
            <Typography variant="h6" className="value spacedBottom">{userInfo.accountNo}</Typography>
            <Typography variant="subtitle1" className="label">Account Holder</Typography>
            <Typography variant="h6" className="value username">{userInfo.username}</Typography>
          </> :
          <>...</>
        }
    </>
  )
}

export default Balance
