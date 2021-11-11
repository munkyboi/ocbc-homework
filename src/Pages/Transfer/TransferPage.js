import React from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

// FORMIK
import { Formik, Form } from 'formik'
import * as Yup from 'yup';

// COMPONENTS
import {
  BottomNav,
  PageHeader,
  ContentContainer,
  CustomTextField,
  CustomCurrencyField,
  CustomSelectField
} from '@Common'
import { CircularProgress } from '@mui/material';

// STYLES
import { TransferPageContainer } from './TransferPageStyles'

const validationSchema = Yup.object().shape({
  receipientAccountNo: Yup.string()
    .required('Please select a payee'),
  amount: Yup.number()
    .min(5, 'Minimum amount is $5')
    .max(20000, 'Transfer amount limit is $20,000')
    .required('Please provide an amount to transfer'),
  description: Yup.string()
    .min(3, 'Description is too short')
})

const TransferPage = () => {
  const token = localStorage.Authorization
  const bottomActions = [
    {
      key: 'transfer-now',
      type: 'submit',
      color: 'primary',
      variant: 'contained',
      label: 'Transfer Now',
      startIcon: 'send',
      context: true
    },
  ]

  const fetchPayees = async () => {
    await axios({
      url: `/payees`,
      headers: {
        Authorization: token
      }
    }).then(res => {
      const data = res.data.data
      // convert data to MUI menu item options
      const payeeOptions = data.map(i => ({
        key: i.id,
        value: i.accountNo,
        text: i.name
      }))
      setPayees(payeeOptions)
    }).catch(err => {
      console.log(JSON.stringify(err))
    })
  }

  const [ ready, setReady ] = React.useState(false)
  const [ payees, setPayees ] = React.useState()

  React.useEffect(() => {
    fetchPayees()
  }, []) // eslint-disable-line

  React.useEffect(() => {
    if (payees) {
      setReady(true)
    }
  }, [payees])

  return (
    <TransferPageContainer className="transition-item container">

      <Formik
        initialValues={{
          receipientAccountNo: '',
          amount: '',
          description: ''
        }}
        // validateOnChange={true}
        // validateOnBlur={true}
        enableReinitialize={true}
        validationSchema={validationSchema}
        onSubmit={(data, {setErrors, setSubmitting}) => {
          (async() => {
            setSubmitting(true)
            console.log("========== on submit", data)
            await axios({
              url: `/transfer`,
              method: 'POST',
              headers: {
                Authorization: token
              },
              data
            }).then(res => {
              const data = res.data
              toast.success(`You've successfully transfered SGD ${data.amount} to ${payees.filter(i => i.value === data.recipientAccount).map(n => n.text)}`)
            }).catch(err => {
              console.log(JSON.stringify(err))
            })
            setSubmitting(false)
          })()
        }}
      >
        {({ handleChange, handleBlur, setFieldValue, errors, isSubmitting, isValid, dirty, handleSubmit, validateField }) => (
          <Form>
            <ContentContainer>
              <PageHeader title="Transfer" canGoBack />
              <div className="form">
                {!ready &&
                  <div className='spinny'>
                    <CircularProgress />
                  </div>
                }
                <CustomSelectField
                  name="receipientAccountNo"
                  id="transfer-payee"
                  label="Select Payee"
                  variant="filled"
                  size="standard"
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.receipientAccountNo}
                  helperText={errors.receipientAccountNo}
                  className="field"
                  options={payees}
                  disabled={isSubmitting || !ready}
                  required
                />

                <input type="hidden" name="amount" />
                <CustomCurrencyField
                  id="transfer-formatted-amount"
                  label="Amount"
                  variant="filled"
                  size="standard"
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onValueChange={(ev) => {
                    console.log(ev.floatValue)
                    setFieldValue('amount', ev.floatValue)
                  }}
                  error={errors.amount}
                  helperText={errors.amount}
                  className="field"
                  disabled={isSubmitting || !ready}
                  required
                />

                <CustomTextField
                  id="transfer-description"
                  name="description"
                  label="Description"
                  variant="filled"
                  size="standard"
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.description}
                  helperText={errors.description}
                  className="field"
                  disabled={isSubmitting || !ready}
                  multiline
                  maxRows={4}
                />
              </div>
            </ContentContainer>
            <BottomNav
              actions={bottomActions}
              handleSubmit={handleSubmit}
              disabled={!(dirty && isValid) || !ready || isSubmitting}
              isSubmitting={isSubmitting}
            />
          </Form>
        )}
      </Formik>
    </TransferPageContainer>
  )
}

export default React.memo(TransferPage)
