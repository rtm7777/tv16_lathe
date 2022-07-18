import {
  FC,
  ChangeEvent,
  useEffect,
  useMemo,
} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useIntl } from 'react-intl'

import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import Grid from '@mui/material/Grid'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import TextField from '@mui/material/TextField'

import { findConfigs, setFilter, setInput } from '@/redux/gearbox'
import { AppState, ThunkDispatch } from '@/redux/types'

import { FILTERS, INPUTS, SYSTEMS } from '@/constants'

const filterSX = {
  display: 'flex',
  marginLeft: '15px',
  width: { xs: '100%', sm: '150px', md: '200px' },
}
const groupSX = { flexDirection: { sm: 'column', lg: 'row' } }

const GearboxFilter: FC = () => {
  const { formatMessage } = useIntl()
  const dispatch = useDispatch<ThunkDispatch>()
  const { system, approx, unique } = useSelector(({ gearbox }: AppState) => gearbox.filters)
  const inputValue = useSelector(({ gearbox }: AppState) => gearbox.inputValue)
  const inputProps = useMemo(() => INPUTS[system as string], [system])
  useEffect(() => { dispatch(findConfigs()) }, [approx, unique, inputValue])
  useEffect(() => { dispatch(setInput('')) }, [system])

  return (
    <Grid direction="row" container>
      <Grid item sx={filterSX}>
        <RadioGroup
          aria-label="gender"
          name="thread"
          onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(setFilter(FILTERS.system, e.target.value))}
          value={system}
          sx={groupSX}
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
      <Grid item sx={filterSX}>
        <FormGroup aria-label="position" sx={groupSX}>
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
      <Grid item sx={filterSX}>
        <TextField
          inputProps={inputProps}
          label={`${formatMessage({ id: `filters.system.${system}` })}: ${inputProps.min} ... ${inputProps.max}`}
          margin="normal"
          onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(setInput(e.target.value))}
          type="number"
          value={inputValue}
          sx={{ width: '150px' }}
        />
      </Grid>
    </Grid>
  )
}

export default GearboxFilter
