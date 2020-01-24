import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { makeStyles, Theme } from '@material-ui/core/styles'

import Dialog from '@material-ui/core/Dialog'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'

import { DialogsContextProps } from '@/components/providers/dialogs/DialogsProvider'
import GearSelector from '@/components/gearbox/GearSelector'

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}))

export interface GearSelectorDialogProps {
  dialogs: DialogsContextProps
}

const GearSelectorDialog: FC<GearSelectorDialogProps> = ({ dialogs: { close } }: GearSelectorDialogProps) => {
  const classes = useStyles({})

  return (
    <Dialog
      aria-labelledby="form-dialog-title"
      fullScreen
      onClose={() => close('gearSelector')}
      open
    >
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => close('gearSelector')}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <FormattedMessage id="gearSelector.gearConfiguration" />
          </Typography>
        </Toolbar>
      </AppBar>
      <GearSelector />
    </Dialog>
  )
}

export default GearSelectorDialog
