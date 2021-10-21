import { createTheme } from '@mui/material/styles'
import { green, orange } from '@mui/material/colors'

export const light = createTheme({
  palette: {
    mode: 'light',
    primary: green,
    secondary: orange,
  },
})
