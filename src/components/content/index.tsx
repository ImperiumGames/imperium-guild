import React from 'react'
import { Grid } from '@mui/material'

export const Content: React.FC = ({ children }) => {
  return (
    <Grid
      sx={{
        minHeight: '100vh',
        paddingTop: '6rem',
      }}
      container
      direction="column"
      alignItems="center"
    >
      {children}
    </Grid>
  )
}
