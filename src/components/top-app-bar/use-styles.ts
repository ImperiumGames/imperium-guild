import { createStyles, makeStyles } from '@mui/styles'
import { alpha } from '@mui/material/styles'

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appBar: {
      color: `inherit`,
      backgroundColor: alpha(theme.palette.background.default, 0.0625),
      backdropFilter: `blur(.5rem) saturate(100%) contrast(50%) brightness(125%)`,
      zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  })
)
