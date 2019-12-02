import React, { FC, useCallback } from 'react'
import { useIntl } from 'react-intl'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'

import CollapsableList from '@/components/gearbox/CollapsableList'
import CheckboxListItem from '@/components/gearbox/CheckboxListItem'

import { findConfigs, toggleGear } from '@/redux/gearbox'
import { AppState } from '@/redux/types'

import { metricGears, imperialGears } from '@/constants'

const useStyles = makeStyles(() => ({
  list: {
    width: '150%',
  },
}))

const GearSelector: FC = () => {
  const classes = useStyles({})
  const { formatMessage } = useIntl()
  const dispatch = useDispatch()
  const selectedGears = useSelector(({ gearbox }: AppState) => gearbox.selectedGears)
  const customGears = useSelector(({ gearbox }: AppState) => gearbox.customGears)
  const handleGearSelect = useCallback((gear) => async () => {
    await dispatch(toggleGear(gear))
    dispatch(findConfigs())
  }, [dispatch])

  const WrappedComponent = (
    <List className={classes.list} subheader={<ListSubheader>Gears</ListSubheader>}>
      <CollapsableList text={formatMessage({ id: 'gearSelector.metric' })}>
        {metricGears.map(gear => (
          <CheckboxListItem
            key={gear}
            checked={selectedGears.includes(gear)}
            text={`z = ${gear}`}
            onClick={handleGearSelect(gear)}
          />
        ))}
      </CollapsableList>
      <CollapsableList text={formatMessage({ id: 'gearSelector.imperial' })}>
        {imperialGears.map(gear => (
          <CheckboxListItem
            key={gear}
            checked={selectedGears.includes(gear)}
            text={`z = ${gear}`}
            onClick={handleGearSelect(gear)}
          />
        ))}
      </CollapsableList>
      <CollapsableList text={formatMessage({ id: 'gearSelector.custom' })}>
        {!customGears.length && (
          <ListItem>
            <ListItemText primary={formatMessage({ id: 'gearSelector.noGears' })} />
          </ListItem>
        )}
        {customGears.map(gear => (
          <CheckboxListItem
            key={gear}
            checked={selectedGears.includes(gear)}
            text={`z = ${gear}`}
            onClick={handleGearSelect(gear)}
          />
        ))}
      </CollapsableList>
    </List>
  )

  return WrappedComponent
}

export default GearSelector
