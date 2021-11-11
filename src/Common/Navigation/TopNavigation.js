import React from 'react'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import cn from 'classnames'

// REDUX
import { useDispatch, useSelector } from 'react-redux'
import userSlice, { getUserState } from '../../Redux/Slices/userSlice'

// COMPONENTS
import { AppBar, Button, Icon, Toolbar } from '@mui/material'
import { Confirm } from '../../Common'

// STYLES
import { TopNavContainer } from './TopNavigationStyles'

const ElevationScroll = (props) => {
  const { children, window, handler } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
    target: window ? window() : undefined,
  });

  handler(trigger)

  return children
}

const TopNav = (props) => {
  const dispatch = useDispatch()
  const { authenticated } = useSelector(getUserState)

  const [ hasScrolled, setHasScrolled ] = React.useState(false)
  const handleScrolled = (bool) => {
    setHasScrolled(bool)
  }
  const [ open, setOpen ] = React.useState(false)
  const handleModalOpen = (bool) => {
    setOpen(bool)
  }
  const handleLogout = () => {
    dispatch(userSlice.actions.setUserInfo())
    dispatch(userSlice.actions.setAuthenticated(false))
    localStorage.removeItem('Authorization')
  }

  return (
    <TopNavContainer
      className={cn("mainAppBar", {
        'scrolled': hasScrolled
      })}
    >
      <ElevationScroll handler={handleScrolled}>
        <AppBar color="transparent" elevation={hasScrolled ? 4 : 0}>
          <Toolbar>
            {authenticated &&
              <Button startIcon={<Icon>logout</Icon>} color="inherit" onClick={() => handleModalOpen(true)}>Logout</Button>
            }
            {open &&
              <Confirm open={open} handleClose={() => handleModalOpen(false)} title="Leaving so soon?" content="Are you sure you want to logout?" handleAgree={handleLogout} />
            }
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </TopNavContainer>
  )
}

export default React.memo(TopNav)
