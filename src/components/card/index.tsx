import { Paper, PaperProps } from '@mui/material'
import React from 'react'

export function Card({ children, ...rest }: PaperProps) {
  return (
    <Paper
      {...rest}
      sx={{
        width: '61.8vw',
        padding: '1.5rem',
        // 50.05% to prevent jagged edge
        // backgroundImage: (theme) => `linear-gradient(-60deg, ${theme.palette.secondary.main}80 50%, #ffff 50.05%)`,
      }}
    >
      {children}
    </Paper>
  )
}
