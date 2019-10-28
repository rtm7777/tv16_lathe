import React, {
  FC, useState, useCallback, ChangeEvent,
} from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Checkbox from '@material-ui/core/Checkbox'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'

import { DialogsContextProps } from '@/components/providers/DialogsProvider'

import { DEFAULT_GEARS_PARAMS } from '@/constants'

export interface AddGearDialogProps {
  dialogs: DialogsContextProps
}

const re = /^[0-9\b]{1,2}$/

const AddGearDialog: FC<AddGearDialogProps> = ({ dialogs: { close } }) => {
  const { formatMessage } = useIntl()
  const [zValue, setZValue] = useState('')
  const [isDChecked, setDChecked] = useState(false)
  const addDisabled = Number(zValue) < DEFAULT_GEARS_PARAMS.minZ
  const dDisabled = Number(zValue) < DEFAULT_GEARS_PARAMS.minD

  const handleChange = useCallback(({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
    if (value === '' || re.test(value)) {
      setZValue(value)
      if (Number(value) < 60 && isDChecked) setDChecked(false)
    }
  }, [isDChecked])
  const handleCheckbox = useCallback((e: ChangeEvent<HTMLInputElement>): void => setDChecked(e.target.checked), [])

  const WrappedComponent = (
    <Dialog open onClose={() => close('addGear')} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title"><FormattedMessage id="dialogs.addGear.header" /></DialogTitle>
      <DialogContent>
        <DialogContentText>
          <FormattedMessage
            id="dialogs.addGear.content"
            values={{ minZ: DEFAULT_GEARS_PARAMS.minZ, maxZ: DEFAULT_GEARS_PARAMS.maxZ }}
          />
        </DialogContentText>
        <FormGroup>
          <TextField
            label={formatMessage(
              { id: 'dialogs.addGear.zLabel' },
              { minZ: DEFAULT_GEARS_PARAMS.minZ, maxZ: DEFAULT_GEARS_PARAMS.maxZ },
            )}
            type="number"
            inputProps={{ min: 15, max: 99, step: 1 }}
            onChange={handleChange}
            margin="normal"
            value={zValue}
          />
          <FormControlLabel
            control={(
              <Checkbox
                checked={isDChecked}
                onChange={handleCheckbox}
                disabled={dDisabled}
                value="checkedB"
                color="primary"
              />
            )}
            label={formatMessage({ id: 'dialogs.addGear.useAsD' })}
          />

        </FormGroup>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => close('addGear')} color="primary">
          <FormattedMessage id="dialogs.addGear.cancel" />
        </Button>
        <Button disabled={addDisabled} onClick={() => close('addGear')} color="primary">
          <FormattedMessage id="dialogs.addGear.add" />
        </Button>
      </DialogActions>
    </Dialog>
  )

  return WrappedComponent
}

export default AddGearDialog
