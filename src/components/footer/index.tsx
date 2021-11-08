import { AppBar, Paper, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const Footer: React.FC = ({ children }) => {
  return (
    <>
      <AppBar enableColorOnDark position="relative">
        <Toolbar>
          <Typography variant={'h1'}>Footer</Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}
