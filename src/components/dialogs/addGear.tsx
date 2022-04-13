import {
  ChangeEvent,
  FC,
  useCallback,
  useState,
} from 'react'
import { useDispatch } from 'react-redux'
import { FormattedMessage, useIntl } from 'react-intl'

import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import TextField from '@mui/material/TextField'

import { useAlerts } from '@/components/providers/alerts/AlertsProvider'
import { DialogsContextProps } from '@/components/providers/dialogs/DialogsProvider'

import { addGear, findConfigs } from '@/redux/gearbox'

import { DEFAULT_GEARS_PARAMS } from '@/constants'

export interface AddGearDialogProps {
  dialogs: DialogsContextProps
}

const re = /^[0-9\b]{1,2}$/

const AddGearDialog: FC<AddGearDialogProps> = ({ dialogs: { close } }: AddGearDialogProps) => {
  const { formatMessage } = useIntl()
  const { show } = useAlerts()
  const dispatch = useDispatch()
  const [zValue, setZValue] = useState('')
  const [isDChecked, setDChecked] = useState(false)
  const addDisabled = Number(zValue) < DEFAULT_GEARS_PARAMS.minZ
  const dDisabled = Number(zValue) < DEFAULT_GEARS_PARAMS.minD

  const handleAddGear = useCallback(async () => {
    try {
      await dispatch(addGear(Number(zValue), isDChecked))
      dispatch(findConfigs())
      close('addGear')
      show({ message: formatMessage({ id: 'alerts.gearAdded' }) })
    } catch (err) {
      show({ type: 'error', message: formatMessage({ id: err.message }) })
    }
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
