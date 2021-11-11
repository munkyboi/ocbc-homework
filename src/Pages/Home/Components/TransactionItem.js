import React from 'react'
import NumberFormat from 'react-number-format'
import { format } from 'date-fns'

// COMPONENTS
import { Papyrus } from '../../../Common'
import { Typography, Grid } from '@mui/material'

const RenderTransactionItemType = (props) => {
  const { transactionType } = props
  switch(transactionType) {
    case 'received':
      return (
        <Grid container spacing={0.5} className='transactionListItem'>
          <Grid item xs={6} className="detailsColumn">
            <Typography variant="body1" className="name">{props.sender.accountHolder}</Typography>
            <Typography variant="caption" className="accountNumber">{props.sender.accountNo}</Typography>
          </Grid>
          <Grid item xs={6} className="valueColumn">
            <Typography variant="body1" className="amount positive">
              <NumberFormat decimalScale={2} fixedDecimalScale={true} value={props.amount} displayType={'text'} thousandSeparator={true} prefix={'S$'} />
            </Typography>
          </Grid>
        </Grid>
      )
    case 'transfer':
      return (
        <Grid container spacing={0.5} className='transactionListItem'>
          <Grid item xs={6} className="detailsColumn">
            <Typography variant="body1" className="name">{props.receipient.accountHolder}</Typography>
            <Typography variant="caption" className="accountNumber">{props.receipient.accountNo}</Typography>
          </Grid>
          <Grid item xs={6} className="valueColumn">
            <Typography variant="body1" className="amount negative">
              <NumberFormat decimalScale={2} fixedDecimalScale={true} value={props.amount} displayType={'text'} thousandSeparator={true} prefix={'S$'} />
            </Typography>
          </Grid>
        </Grid>
      )
    default:
      return (
        <Grid container spacing={0.5} className='transactionListItem'>
          <Grid item xs={6} className="detailsColumn">
            <Typography variant="body1" className="name">{props.receipient.accountHolder}</Typography>
            <Typography variant="caption" className="accountNumber">{props.receipient.accountNo}</Typography>
          </Grid>
          <Grid item xs={6} className="valueColumn">
            <Typography variant="body1" className="amount">
              <NumberFormat decimalScale={2} fixedDecimalScale={true} value={props.amount} displayType={'text'} thousandSeparator={true} prefix={'S$'} />
            </Typography>
          </Grid>
        </Grid>
      )
  }
}

const TransactionItem = (props) => {
  const {
    transactions
  } = props
  return (
    <>
      <Papyrus className="paper transactionItem">
          <Typography variant="subtitle1" className="transactionSub">
            {format(new Date(props.date), 'd MMM yyyy')}
          </Typography>
          <div className="transactionList">
            {transactions && transactions.map(item => (
              <RenderTransactionItemType key={item.transactionId} {...item} />
            ))}
          </div>
        </Papyrus>
    </>
  )
}

export default React.memo(TransactionItem)
