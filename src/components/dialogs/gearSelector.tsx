import { FC } from 'react'
import { FormattedMessage } from 'react-intl'

import Dialog from '@mui/material/Dialog'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'

import { DialogsContextProps } from '@/components/providers/dialogs/DialogsProvider'
import GearSelector from '@/components/gearbox/GearSelector'

export interface GearSelectorDialogProps {
  dialogs: DialogsContextProps
}

const GearSelectorDialog: FC<GearSelectorDialogProps> = ({ dialogs: { close } }: GearSelectorDialogProps) => {
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
          <Typography variant="h6" sx={{ marginLeft: 2, flex: 1 }}>
            <FormattedMessage id="gearSelector.gearConfiguration" />
          </Typography>
        </Toolbar>
      </AppBar>
      <GearSelector />
    </Dialog>
  )
}

export default GearSelectorDialog
