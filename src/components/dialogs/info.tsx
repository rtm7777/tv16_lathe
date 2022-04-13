import { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { makeStyles } from '@mui/styles'

import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Grid from '@mui/material/Grid'

import { DialogsContextProps } from '@/components/providers/dialogs/DialogsProvider'

export interface InfoDialogProps {
  dialogs: DialogsContextProps
}

const useStyles = makeStyles(() => ({
  displayWrapper: {
    textAlign: 'center',
  },
}))

const InfoDialog: FC<InfoDialogProps> = ({ dialogs: { close } }: InfoDialogProps) => {
  const classes = useStyles({})

  return (
    <Dialog open onClose={() => close('info')} aria-labelledby="customized-dialog-title">
      <DialogTitle id="customized-dialog-title">
        <FormattedMessage id="dialogs.calculator.header" />
      </DialogTitle>
      <DialogContent>
        <Grid container>
          <span className={classes.displayWrapper}>Info</span>
        </Grid>
      </DialogContent>
    </Dialog>
  )
}

export default InfoDialog
