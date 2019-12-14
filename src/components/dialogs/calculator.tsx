import React, {
  ChangeEvent,
  FC,
  useCallback,
  useState,
} from 'react'
import { FormattedMessage, useIntl } from 'react-intl'

import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Grid from '@material-ui/core/Grid'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import TextField from '@material-ui/core/TextField'

import { DialogsContextProps } from '@/components/providers/DialogsProvider'

export interface CalculatorDialogProps {
  dialogs: DialogsContextProps
}

const re = /^[0-9\b]{1,2}$/

const CalculatorDialog: FC<CalculatorDialogProps> = ({ dialogs: { close } }) => {
  const { formatMessage } = useIntl()
  const [isDChecked, setDChecked] = useState(false)


  const handleChange = useCallback(({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
    if (value === '' || re.test(value)) {
      if (Number(value) < 60 && isDChecked) setDChecked(false)
    }
  }, [isDChecked])

  return (
    <Dialog open onClose={() => close('calculator')} aria-labelledby="customized-dialog-title">
      <DialogTitle id="customized-dialog-title">
        <FormattedMessage id="dialogs.calculator.header" />
      </DialogTitle>
      <DialogContent dividers>
        <Grid direction="row" container>
          <Grid item>
            <TextField />
          </Grid>
          <Grid item />
        </Grid>
      </DialogContent>
    </Dialog>
  )
}

export default CalculatorDialog
