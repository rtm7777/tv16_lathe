import { FC } from 'react'
import { FormattedMessage } from 'react-intl'

import Box from '@mui/material/Box'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Grid from '@mui/material/Grid'

import { DialogsContextProps } from '@/components/providers/dialogs/DialogsProvider'

export interface InfoDialogProps {
  dialogs: DialogsContextProps
}

const InfoDialog: FC<InfoDialogProps> = ({ dialogs: { close } }: InfoDialogProps) => {
  return (
    <Dialog open onClose={() => close('info')} aria-labelledby="customized-dialog-title">
      <DialogTitle id="customized-dialog-title">
        <FormattedMessage id="dialogs.calculator.header" />
      </DialogTitle>
      <DialogContent>
        <Grid container>
          <Box
            component="span"
            sx={{ textAlign: 'center' }}
          >
            Info
          </Box>
        </Grid>
      </DialogContent>
    </Dialog>
  )
}

export default InfoDialog
