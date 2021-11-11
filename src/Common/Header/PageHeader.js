import React from 'react'
import { Link } from 'react-router-dom'

// COMPONENTS
import { Icon, IconButton, Typography } from '@mui/material'

// STYLES
import { PageHeaderContainer } from './PageHeaderStyles'

const PageHeader = (props) => {
  const {
    title,
    backTo
  } = props

  return (
    <PageHeaderContainer>
      {backTo &&
        <IconButton to={backTo} component={Link} fontSize="large"
          className="backButton"
        >
          <Icon fontSize="large">arrow_back</Icon>
        </IconButton>
      }
      <Typography variant="h4" className="title">{title}</Typography>
    </PageHeaderContainer>
  )
}

export default React.memo(PageHeader)
