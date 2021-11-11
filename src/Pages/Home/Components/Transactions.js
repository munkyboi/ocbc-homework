import React from 'react'
import axios from 'axios'

// REDUX
import { useDispatch, useSelector } from 'react-redux'
import userSlice, { getUserState } from '@Slices/userSlice'

// COMPONENTS
import { TransactionItem } from './'

const Transactions = () => {
  const token = localStorage.Authorization
  const [ ready, setReady ] = React.useState(false)
  const [ transactions, setTransactions ] = React.useState()

  React.useEffect(() => {
    (async() => {
      await axios({
        url: `/transactions`,
        headers: {
          Authorization: token
        }
      }).then(res => {
        const data = res.data.data
        console.log('============ TRANSACTION DATA', data)
        // reduce data and group by date
        const groups = data.reduce((groups, tx) => {
          const date = tx.transactionDate.split('T')[0];
          console.log(date)
          if (!groups[date]) {
            groups[date] = []
          }
          groups[date].push(tx)
          return groups
        }, {})
        console.log(groups)
        const groupArrays = Object.keys(groups).map(date => {
          return {
            date,
            transactions: groups[date]
          }
        })
        setTransactions(groupArrays)
      }).catch(err => {
        console.log(JSON.stringify(err))
      })
    })()
  }, []) // eslint-disable-line

  React.useEffect(() => {
    if (transactions) {
      console.log("========== transactions", transactions)
      setReady(true)
    }
  }, [transactions]) // eslint-disable-line

  return (
    <>
      {ready ?
        transactions && transactions.map(item => (
          <TransactionItem key={item.date} {...item} />
        )) :
        <>...</>
      }
    </>
  )
}

export default React.memo(Transactions)
