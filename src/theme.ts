import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  components: {
    MuiDrawer: {
      defaultProps: {
        PaperProps: {
          sx: {
            width: '58px',
            overflowX: 'hidden',
          },
        },
      },
    },
  },
})

export default theme
