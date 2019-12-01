import React, { FC, ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useIntl } from 'react-intl'
import { Theme, makeStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import FormGroup from '@material-ui/core/FormGroup'

import { findConfigs, setFilter } from '@/redux/gearbox'
import { AppState } from '@/redux/types'

import { FILTERS, SYSTEMS } from '@/constants'

const useStyles = makeStyles((theme: Theme) => ({
  filter: {
    display: 'flex',
    marginLeft: '15px',
    [theme.breakpoints.up('xs')]: { width: '100%' },
    [theme.breakpoints.up('sm')]: { width: '150px' },
    [theme.breakpoints.up('md')]: { width: '200px' },
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

  const WrappedComponent = (
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
            value={SYSTEMS.pmm}
            control={<Radio color="primary" />}
            label={formatMessage({ id: 'filters.system.pmm' })}
          />
          <FormControlLabel
            value={SYSTEMS.tpi}
            control={<Radio color="primary" />}
            label={formatMessage({ id: 'filters.system.tpi' })}
          />
        </RadioGroup>
      </Grid>
      <Grid item className={classes.filter}>
        <FormGroup aria-label="position" className={classes.group}>
          <FormControlLabel
            value="top"
            control={(
              <Checkbox
                color="primary"
                onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(setFilter(FILTERS.approx, e.target.checked))}
                checked={approx as boolean}
              />
            )}
            label={formatMessage({ id: 'filters.approx' })}
          />
          <FormControlLabel
            value="start"
            control={(
              <Checkbox
                color="primary"
                onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(setFilter(FILTERS.unique, e.target.checked))}
                checked={unique as boolean}
              />
            )}
            label={formatMessage({ id: 'filters.unique' })}
          />
        </FormGroup>
      </Grid>
      <Grid item className={classes.filter}>
        <TextField
          label="value"
          type="number"
          margin="normal"
          onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(findConfigs(e.target.value))}
        />
      </Grid>
    </Grid>
  )
  return WrappedComponent
}

export default GearboxFilter
