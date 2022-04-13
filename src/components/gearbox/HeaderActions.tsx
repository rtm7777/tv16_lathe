import { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { makeStyles, Theme } from '@mui/material/styles'

import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import FunctionsIcon from '@mui/icons-material/Functions'
import TuneIcon from '@mui/icons-material/Tune'

import { useDialogs } from '@/components/providers/dialogs/DialogsProvider'

const useStyles = makeStyles((theme: Theme) => ({
  desktopVisible: {
    [theme.breakpoints.up('xs')]: { display: 'none' },
    [theme.breakpoints.up('sm')]: { display: 'initial' },
  },
  mobileVisible: {
    [theme.breakpoints.up('sm')]: { display: 'none' },
  },
}))

const HeaderActions: FC = () => {
  const classes = useStyles({})
  const dialogs = useDialogs()

  return (
    <>
      <div className={classes.desktopVisible}>
        <Button color="inherit" startIcon={<FunctionsIcon />} onClick={() => dialogs.open('calculator')}>
          <FormattedMessage id="header.calculator" />
        </Button>
      </div>
      <div className={classes.mobileVisible}>
        <IconButton aria-label="open calculator" color="inherit" onClick={() => dialogs.open('calculator')}>
          <FunctionsIcon />
        </IconButton>
        <IconButton aria-label="change gears" color="inherit" onClick={() => dialogs.open('gearSelector')}>
          <TuneIcon />
        </IconButton>
      </div>
    </>
  )
}

export default HeaderActions
