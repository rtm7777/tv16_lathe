import {
  FC,
  ChangeEvent,
  useEffect,
  useMemo,
} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useIntl } from 'react-intl'
import { Theme, makeStyles } from '@mui/material/styles'

import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import Grid from '@mui/material/Grid'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import TextField from '@mui/material/TextField'

import { findConfigs, setFilter, setInput } from '@/redux/gearbox'
import { AppState } from '@/redux/types'

import { FILTERS, INPUTS, SYSTEMS } from '@/constants'

const useStyles = makeStyles((theme: Theme) => ({
  filter: {
    display: 'flex',
    marginLeft: '15px',
    [theme.breakpoints.up('xs')]: { width: '100%' },
    [theme.breakpoints.up('sm')]: { width: '150px' },
    [theme.breakpoints.up('md')]: { width: '200px' },
  },
  input: {
    width: '150px',
  },
  group: {
    flexDirection: 'row',
    [theme.breakpoints.up('sm')]: { flexDirection: 'column' },
  },
}))

const GearboxFilter: FC = () => {
  const classes = useStyles({})
  const { formatMessage } = useIntl()
  const dispatch = useDispatch()
  const { system, approx, unique } = useSelector(({ gearbox }: AppState) => gearbox.filters)
  const inputValue = useSelector(({ gearbox }: AppState) => gearbox.inputValue)
  const inputProps = useMemo(() => INPUTS[system as string], [system])
  useEffect(() => { dispatch(findConfigs()) }, [approx, unique, inputValue])
  useEffect(() => { dispatch(setInput('')) }, [system])

  return (
    <Grid direction="row" container>
      <Grid item className={classes.filter}>
        <RadioGroup
          aria-label="gender"
          className={classes.group}
          name="thread"
          onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(setFilter(FILTERS.system, e.target.value))}
          value={system}
        >
          <FormControlLabel
            control={<Radio color="primary" />}
            label={formatMessage({ id: 'filters.system.pmm' })}
            value={SYSTEMS.pmm}
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            label={formatMessage({ id: 'filters.system.tpi' })}
            value={SYSTEMS.tpi}
          />
        </RadioGroup>
      </Grid>
      <Grid item className={classes.filter}>
        <FormGroup aria-label="position" className={classes.group}>
          <FormControlLabel
            value="top"
            control={(
              <Checkbox
                checked={approx as boolean}
                color="primary"
                onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(setFilter(FILTERS.approx, e.target.checked))}
              />
            )}
            label={formatMessage({ id: 'filters.approx' })}
          />
          <FormControlLabel
            value="start"
            control={(
              <Checkbox
                checked={unique as boolean}
                color="primary"
                onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(setFilter(FILTERS.unique, e.target.checked))}
              />
            )}
            label={formatMessage({ id: 'filters.unique' })}
          />
        </FormGroup>
      </Grid>
      <Grid item className={classes.filter}>
        <TextField
          className={classes.input}
          inputProps={inputProps}
          label={`${formatMessage({ id: `filters.system.${system}` })}: ${inputProps.min} ... ${inputProps.max}`}
          margin="normal"
          onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(setInput(e.target.value))}
          type="number"
          value={inputValue}
        />
      </Grid>
    </Grid>
  )
}

export default GearboxFilter
