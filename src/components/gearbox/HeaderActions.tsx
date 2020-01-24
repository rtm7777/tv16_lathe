import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { makeStyles, Theme } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import FunctionsIcon from '@material-ui/icons/Functions'
import TuneIcon from '@material-ui/icons/Tune'

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
