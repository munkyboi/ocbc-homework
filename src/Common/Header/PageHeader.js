import React from 'react'
import { useHistory } from 'react-router'

// COMPONENTS
import { Icon, IconButton, Typography } from '@mui/material'

// STYLES
import { PageHeaderContainer } from './PageHeaderStyles'

const PageHeader = (props) => {
  const {
    title,
    canGoBack
  } = props
  const history = useHistory()

  const handleBackButton = () => {
    history.goBack()
  }

  return (
    <PageHeaderContainer>
      {canGoBack &&
        <IconButton fontSize="large"
          className="backButton"
          onClick={handleBackButton}
        >
          <Icon fontSize="large">arrow_back</Icon>
        </IconButton>
      }
      <Typography variant="h4" className="title">{title}</Typography>
    </PageHeaderContainer>
  )
}

export default React.memo(PageHeader)
