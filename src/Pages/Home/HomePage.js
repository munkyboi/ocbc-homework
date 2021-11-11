import React from 'react'
import { useHistory } from 'react-router-dom'

// COMPONENTS
import { Papyrus, BottomNav, ContentContainer } from '@Common'
import { Box, Typography } from '@mui/material'
import { Balance, Transactions } from './Components'

// STYLES
import { HomePageContainer } from './HomePageStyles'

const HomePage = () => {
  const history = useHistory()
  const bottomActions = [
    {
      key: 'make-transfer',
      type: 'button',
      color: 'primary',
      variant: 'contained',
      label: 'Make Transfer',
      startIcon: 'paid',
      onClick: () => {
        history.push('/transfer')
      },
    },
  ]

  return (
    <HomePageContainer className="transition-item container">

      <ContentContainer>
        <Box className="mainBox">
          <Papyrus className="paper">
            <Balance />
          </Papyrus>
        </Box>
        <Box className='transactionBox'>
          <Typography variant="h6" className="title">Your transaction history</Typography>
          <Transactions />
        </Box>
      </ContentContainer>
      
      <BottomNav actions={bottomActions} />

    </HomePageContainer>
  )
}

export default React.memo(HomePage)
