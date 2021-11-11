import React from 'react'
import cn from 'classnames'

// COMPONENTS
// import LoadingButton from '@mui/lab/LoadingButton'
import { Button, CircularProgress, Icon } from '@mui/material'

// STYLES
import { BottomNavContainer } from './BottomNavigationStyles'

const RenderAction = (props) => {
  switch(props.type) {
    case 'submit':
      return (
        <Button
          className={cn('bottomButton', {
            [`${props.className ? props.className : ''}`]: props.className,
            'loading': props.isSubmitting
          })}
          type="submit"
          color={props.color}
          variant={props.variant}
          startIcon={props.startIcon ? <Icon>{props.startIcon}</Icon> : false}
          onClick={() => {
            if (props.context) {
              props.handleSubmit()
            } else {
              props.onClick()
            }
          }}
          disableElevation
          disabled={props.context ? props.disabled : false}
        >
          {props.isSubmitting &&
            <div className='buttonLoader'>
              <CircularProgress size={20} />
            </div>
          }
          {props.label}
        </Button>
      )
    default:
      return (
        <Button
          className={cn('bottomButton', {
            [`${props.className ? props.className : ''}`]: props.className
          })}
          color={props.color}
          variant={props.variant}
          startIcon={props.startIcon ? <Icon>{props.startIcon}</Icon> : false}
          onClick={() => {
            if (props.context) {
              props.handleSubmit()
            } else {
              props.onClick()
            }
          }}
          disableElevation
          disabled={props.context ? props.disabled : false}
        >
          {props.label}
        </Button>
      )
  }
}

const BottomNav = (props) => {
  const {
    actions,
    disabled,
    handleSubmit,
    isSubmitting,
  } = props

  // listen for changes so we can set a css variable to adjust main content wrapper min-height
  const bottomNavRef = React.useRef()
  React.useEffect(() => {
    // console.log('================ actions', actions)
    if (actions && bottomNavRef.current) {
      const h = bottomNavRef.current.offsetHeight
      document.documentElement.style.setProperty('--bottomNavHeight', `${h}px`);
    }
  }, [actions])

  return (
    <BottomNavContainer ref={bottomNavRef} className="bottomNav">
      {actions && actions.map(item => (
        <RenderAction
          key={item.key}
          disabled={disabled}
          handleSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          {...item}
        />
      ))}
    </BottomNavContainer>
  )
}

export default React.memo(BottomNav)
