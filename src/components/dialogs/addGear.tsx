import React, {
  ChangeEvent,
  FC,
  useCallback,
  useState,
} from 'react'
import { useDispatch } from 'react-redux'
import { FormattedMessage, useIntl } from 'react-intl'

import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import TextField from '@material-ui/core/TextField'

import { DialogsContextProps } from '@/components/providers/DialogsProvider'

import { addGear, findConfigs } from '@/redux/gearbox'

import { DEFAULT_GEARS_PARAMS } from '@/constants'

export interface AddGearDialogProps {
  dialogs: DialogsContextProps
}

const re = /^[0-9\b]{1,2}$/

const AddGearDialog: FC<AddGearDialogProps> = ({ dialogs: { close } }: AddGearDialogProps) => {
  const { formatMessage } = useIntl()
  const dispatch = useDispatch()
  const [zValue, setZValue] = useState('')
  const [isDChecked, setDChecked] = useState(false)
  const addDisabled = Number(zValue) < DEFAULT_GEARS_PARAMS.minZ
  const dDisabled = Number(zValue) < DEFAULT_GEARS_PARAMS.minD

  const handleAddGear = useCallback(async () => {
    await dispatch(addGear(Number(zValue), isDChecked))
    dispatch(findConfigs())
    close('addGear')
  }, [dispatch, close, isDChecked, zValue])

  const handleChange = useCallback(({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
    if (value === '' || re.test(value)) {
      setZValue(value)
      if (Number(value) < 60 && isDChecked) setDChecked(false)
    }
  }, [isDChecked])

  const handleCheckbox = useCallback((e: ChangeEvent<HTMLInputElement>): void => setDChecked(e.target.checked), [])

  return (
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
            inputProps={{ min: DEFAULT_GEARS_PARAMS.minZ, max: DEFAULT_GEARS_PARAMS.maxZ, step: 1 }}
            label={formatMessage(
              { id: 'dialogs.addGear.zLabel' },
              { minZ: DEFAULT_GEARS_PARAMS.minZ, maxZ: DEFAULT_GEARS_PARAMS.maxZ },
            )}
            margin="normal"
            onChange={handleChange}
            type="number"
            value={zValue}
          />
          <FormControlLabel
            control={(
              <Checkbox
                checked={isDChecked}
                color="primary"
                disabled={dDisabled}
                onChange={handleCheckbox}
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
        <Button disabled={addDisabled} onClick={handleAddGear} color="primary">
          <FormattedMessage id="dialogs.addGear.add" />
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AddGearDialog
