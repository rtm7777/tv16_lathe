import React, {
  ChangeEvent,
  FC,
  useCallback,
  useState,
  useEffect,
} from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import { Theme, makeStyles } from '@material-ui/core/styles'

import Chip from '@material-ui/core/Chip'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

import { DialogsContextProps } from '@/components/providers/DialogsProvider'

import { DEFAULT_GEARS_PARAMS } from '@/constants'

export interface CalculatorDialogProps {
  dialogs: DialogsContextProps
}

const useStyles = makeStyles((theme: Theme) => ({
  inputsWrapper: {
    justifyContent: 'space-evenly',
  },
  displayWrapper: {
    justifyContent: 'space-evenly',
  },
  input: {
    width: '150px',
  },
}))

const inputs = ['a', 'b', 'c', 'd']

const CalculatorDialog: FC<CalculatorDialogProps> = ({ dialogs: { close } }) => {
  const classes = useStyles({})
  const { formatMessage } = useIntl()
  const [gears, setGears] = useState({ a: 0, b: 0, c: 0, d: 0 }) // eslint-disable-line object-curly-newline
  const [pitch, setPitch] = useState(0)

  const handleChange = useCallback((gear) => ({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
    const number = Number(value)
    if (number) {
      setGears({ ...gears, [gear]: number })
      return
    }
    setGears({ ...gears, [gear]: 0 })
  }, [gears, setGears])

  useEffect(() => {
    if (Object.values(gears).some((g) => !g)) {
      setPitch(0)
    } else {
      setPitch(3 * (gears.a / gears.b) * (gears.c / gears.d))
    }
  }, [gears, setPitch])

  return (
    <Dialog open onClose={() => close('calculator')} aria-labelledby="customized-dialog-title">
      <DialogTitle id="customized-dialog-title">
        <FormattedMessage id="dialogs.calculator.header" />
      </DialogTitle>
      <DialogContent>
        <Grid container>
          <Grid
            item
            className={classes.inputsWrapper}
            xs={12}
            sm={8}
          >
            { inputs.map((i) => (
              <TextField
                className={classes.input}
                inputProps={{ min: DEFAULT_GEARS_PARAMS.minZ, max: DEFAULT_GEARS_PARAMS.maxZ, step: 1 }}
                label={formatMessage(
                  { id: `dialogs.calculator.${i}` },
                  { minZ: DEFAULT_GEARS_PARAMS.minZ, maxZ: DEFAULT_GEARS_PARAMS.maxZ },
                )}
                key={i}
                margin="normal"
                onChange={handleChange(i)}
                type="number"
              />
            ))}
          </Grid>
          <Grid
            item
            className={classes.displayWrapper}
            xs={12}
            sm={4}
          >
            <Chip label={`${formatMessage({ id: 'table.feed' })} = ${pitch / 20}`} />
            <Chip label={`${formatMessage({ id: 'table.pmm' })} = ${pitch}`} />
            <Chip label={`${formatMessage({ id: 'table.tpi' })} = ${25.4 / pitch}`} />
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  )
}

export default CalculatorDialog
