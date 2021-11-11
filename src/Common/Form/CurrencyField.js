import React from 'react'
import { default as styledComponent } from 'styled-components'
import { alpha, styled } from "@mui/system";
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material'
import NumberFormat from 'react-number-format'

const BaseTextField = styled((props) => {
  const {
    id,
    ...rest
  } = props
  return (
    <TextField
      InputProps={{
        startAdornment: <InputAdornment position="start">SGD</InputAdornment>,
        disableUnderline: true
      }}
      {...rest}
      data-testid={id}
    />
  )})(({ theme }) => ({
    '& .MuiFilledInput-root': {
      border: '2px solid #0f0f0f',
      overflow: 'hidden',
      borderRadius: 0,
      fontSize: '1rem',
      backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      '&:hover': {
        backgroundColor: 'transparent',
      },
      '&.Mui-error': {
        border: '2px solid #ff0000',
        backgroundColor: 'rgba(255,0,0,0.1)',
      },
      '&.Mui-focused': {
        backgroundColor: 'transparent',
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));

  const Container = styledComponent('div')`
    margin-bottom: 1rem;
    
    .MuiInputLabel-root {
      font-size: 1rem;
    }
    .MuiFormHelperText-root {
      font-size: 0.75rem;
    }
    .MuiFilledInput-root:after {
      display: none;
    }
  `

  const CustomCurrencyField = (props) => {
    return (
      <Container>
        <NumberFormat
          decimalScale={2}
          thousandSeparator={true}
          customInput={BaseTextField}
          allowNegative={false}
          {...props}
        />
      </Container>
    )
  }

  export default React.memo(CustomCurrencyField)