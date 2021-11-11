import React from 'react'

// REDUX
import { useDispatch, useSelector } from 'react-redux'
import userSlice, { getUserState } from '@Slices/userSlice'

// COMPONENTS
import { Button, Icon, Toolbar } from '@mui/material'
import { Confirm } from '@Common'

// STYLES
import { TopNavContainer } from './TopNavigationStyles'

const TopNav = () => {
  const dispatch = useDispatch()
  const { authenticated } = useSelector(getUserState)

  const [ open, setOpen ] = React.useState(false)
  const handleModalOpen = (bool) => {
    setOpen(bool)
  }
  const handleLogout = () => {
    dispatch(userSlice.actions.setAuthenticated(false))
    localStorage.removeItem('Authorization')
  }

  return (
    <TopNavContainer className="mainAppBar">
      <Toolbar>
        {authenticated &&
          <Button startIcon={<Icon>logout</Icon>} color="inherit" onClick={() => handleModalOpen(true)}>Logout</Button>
        }
        {open &&
          <Confirm open={open} handleClose={() => handleModalOpen(false)} title="Leaving so soon?" content="Are you sure you want to logout?" handleAgree={handleLogout} />
        }
      </Toolbar>
    </TopNavContainer>
  )
}

export default React.memo(TopNav)
