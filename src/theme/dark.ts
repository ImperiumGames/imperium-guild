import { createTheme } from '@mui/material/styles'
import { green, orange } from '@mui/material/colors'

export const dark = createTheme({
  palette: {
    mode: 'dark',
    primary: green,
    secondary: orange,
    background: {
      default: '#000000',
    },
  },
})
