import React from 'react'
import { default as styledComponent } from 'styled-components'
import { alpha, styled } from "@mui/system";
import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';

const SelectField = styled((props) => (
  <Select {...props} />
))(({ theme }) => ({
  '&.MuiFilledInput-root': {
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
    '&.Mui-focused': {
      backgroundColor: 'transparent',
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-error': {
      border: '2px solid #ff0000',
      backgroundColor: 'rgba(255,0,0,0.1)',
    },
    '&:before': {
      display: 'none'
    },
    '&:after': {
      display: 'none'
    },
  },
}));

const Container = styledComponent('div')`
  margin-bottom: 1rem;
  
  .MuiFormLabel-root {
    font-size: 1rem;
  }
  .MuiFormHelperText-root {
    font-size: 0.75rem;
  }
`

const CustomSelectField = (props) => {
  const {
    className,
    error,
    label,
    variant,
    fullWidth,
    options,
    helperText,
    ...restProps
  } = props

  const [ ready, setReady ] = React.useState(false)

  React.useEffect(() => {
    setReady(true)
  }, []) // eslint-disable-line

  return (
    <>
      {ready &&
        <Container>
          <FormControl fullWidth={fullWidth} variant={variant} error={error} className={className}>
            <InputLabel id={props.id} required={props.required}>{label}</InputLabel>
            <SelectField {...restProps}>
              {options && options.map(item => (
                <MenuItem key={item.key} value={item.value}>{item.text}</MenuItem>
              ))}
            </SelectField>
            {helperText &&
              <FormHelperText>{helperText}</FormHelperText>
            }
          </FormControl>
        </Container>
      }
    </>
  )
}

export default CustomSelectField