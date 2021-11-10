import React from 'react'

// COMPONENTS
import { Box, Button, Toolbar, Icon, Typography, Grid  } from '@mui/material'

// STYLES
import { HomePageContainer } from './HomePageStyles'

const HomePage = () => {
  return (
    <HomePageContainer>
      <Box className="mainAppBar">
        <Toolbar>
          <Button startIcon={<Icon>logout</Icon>} color="inherit">Logout</Button>
        </Toolbar>
      </Box>
      <Box className="mainBox">
        <div className="paper" elevation={4}>
          <Typography variant="h6" className="title">You Have</Typography>
          <Typography variant="h4" className="amount">SGD 21,421.33</Typography>
          <Typography variant="subtitle1" className="label">Account No</Typography>
          <Typography variant="h6" className="value spacedBottom">3213-321-9923</Typography>
          <Typography variant="subtitle1" className="label">Account Holder</Typography>
          <Typography variant="h6" className="value">Donald Trump</Typography>
        </div>
      </Box>
      <Box className='transactionBox'>
        <Typography variant="h6" className="title">Your transaction history</Typography>

        <div className="paper transactionItem" elevation={4}>
          <Typography variant="subtitle1" className="transactionSub">6 Sep 2021</Typography>
          <div className="transactionList">
            <div className="transactionListItem">
              <Grid container spacing={0.5}>
                <Grid item xs={6} className="detailsColumn">
                  <Typography variant="body1" className="name">Jackie</Typography>
                  <Typography variant="caption" className="accountNumber">411-124124-1245124</Typography>
                </Grid>
                <Grid item xs={6} className="valueColumn">
                  <Typography variant="h6" className="amount positive">1,200.00</Typography>
                </Grid>
              </Grid>
            </div>
            <div className="transactionListItem">
              <Grid container spacing={0.5}>
                <Grid item xs={6} className="detailsColumn">
                  <Typography variant="body1" className="name">Tim Cook</Typography>
                  <Typography variant="caption" className="accountNumber">411-124124-1245124</Typography>
                </Grid>
                <Grid item xs={6} className="valueColumn">
                  <Typography variant="h6" className="amount negative">- 310.00</Typography>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
        
        <div className="paper transactionItem" elevation={4}>
          <Typography variant="subtitle1" className="transactionSub">6 Sep 2021</Typography>
          <div className="transactionList">
            <div className="transactionListItem">
              <Grid container spacing={0.5}>
                <Grid item xs={6} className="detailsColumn">
                  <Typography variant="body1" className="name">Jackie</Typography>
                  <Typography variant="caption" className="accountNumber">411-124124-1245124</Typography>
                </Grid>
                <Grid item xs={6} className="valueColumn">
                  <Typography variant="h6" className="amount positive">1,200.00</Typography>
                </Grid>
              </Grid>
            </div>
            <div className="transactionListItem">
              <Grid container spacing={0.5}>
                <Grid item xs={6} className="detailsColumn">
                  <Typography variant="body1" className="name">Tim Cook</Typography>
                  <Typography variant="caption" className="accountNumber">411-124124-1245124</Typography>
                </Grid>
                <Grid item xs={6} className="valueColumn">
                  <Typography variant="h6" className="amount negative">- 310.00</Typography>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
        
        <div className="paper transactionItem" elevation={4}>
          <Typography variant="subtitle1" className="transactionSub">6 Sep 2021</Typography>
          <div className="transactionList">
            <div className="transactionListItem">
              <Grid container spacing={0.5}>
                <Grid item xs={6} className="detailsColumn">
                  <Typography variant="body1" className="name">Jackie</Typography>
                  <Typography variant="caption" className="accountNumber">411-124124-1245124</Typography>
                </Grid>
                <Grid item xs={6} className="valueColumn">
                  <Typography variant="h6" className="amount positive">1,200.00</Typography>
                </Grid>
              </Grid>
            </div>
            <div className="transactionListItem">
              <Grid container spacing={0.5}>
                <Grid item xs={6} className="detailsColumn">
                  <Typography variant="body1" className="name">Tim Cook</Typography>
                  <Typography variant="caption" className="accountNumber">411-124124-1245124</Typography>
                </Grid>
                <Grid item xs={6} className="valueColumn">
                  <Typography variant="h6" className="amount negative">- 310.00</Typography>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>

      </Box>
      <Box className="bottomNavigation">
        <Button className="bottomButton">Make Transfer</Button>
      </Box>
    </HomePageContainer>
  )
}

export default HomePage
