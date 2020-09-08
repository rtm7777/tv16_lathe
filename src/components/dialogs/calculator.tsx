import React, {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import { Theme, makeStyles } from '@material-ui/core/styles'

import Chip from '@material-ui/core/Chip'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

import { DialogsContextProps } from '@/components/providers/dialogs/DialogsProvider'

export interface CalculatorDialogProps {
  dialogs: DialogsContextProps
}

const useStyles = makeStyles((theme: Theme) => ({
  inputsWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginBottom: '10px',
  },
  displayWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& > div': {
      width: '80%',
      marginTop: '5px',
      marginBottom: '10px',
    },
  },
  input: {
    [theme.breakpoints.down('sm')]: {
      flexBasis: '80%',
      margin: '10px 0 10px 0',
    },
    flexBasis: 'calc(50% - 30px)',
    margin: '5px 15px 10px 15px',
  },
}))

const inputs = ['a', 'b', 'c', 'd']

const CalculatorDialog: FC<CalculatorDialogProps> = ({ dialogs: { close } }: CalculatorDialogProps) => {
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
                inputProps={{ step: 1 }}
                label={formatMessage({ id: `dialogs.calculator.${i}` })}
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
            <Chip label={`${formatMessage({ id: 'table.feed' })} = ${(pitch / 20).toFixed(4)}`} />
            <Chip label={`${formatMessage({ id: 'table.pmm' })} = ${pitch.toFixed(4)}`} />
            <Chip label={`${formatMessage({ id: 'table.tpi' })} = ${(25.4 / pitch).toFixed(4)}`} />
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  )
}

export default CalculatorDialog
