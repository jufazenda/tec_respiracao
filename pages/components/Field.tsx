import { PropsField } from '@/Types/Props'
import { TextField, styled } from '@mui/material'
import React, { ChangeEvent } from 'react'

const TextFieldpadrao = styled(TextField)`
  input {
    color: black !important;
    background-color: rgba(255, 255, 255, 0.5);
  }
  .MuiOutlinedInput-root {
    fieldset {
      color: black;
      background-color: rgba(255, 255, 255, 0.5);
    }
    &:hover fieldset {
      border-color: #aaaaaa !important;
      color: #aaaaaa;
    }
    &.Mui-focused fieldset {
      border-color: #aaaaaa !important;
      color: #aaaaaa;
    }
    .MuiInputLabel-root {
      color: #aaaaaa !important;
    }
    .MuiInputLabel-root.Mui-focused {
      color: #aaaaaa !important;
    }
  }
`

const Field = ({ value, setValue, label, type }: PropsField) => {
  return (
    <TextFieldpadrao
      className='w-3/4'
      type={type}
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        setValue(e.target.value)
      }
      sx={{
        '.MuiFormLabel-root': {
          alignItems: 'center',
          display: 'flex',
          height: '25px',
          color: '#AAAAAA',
          fontWeight: 600,
        },
      }}
      label={label}
    />
  )
}

export default Field
