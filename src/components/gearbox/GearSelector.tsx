import { FC, useCallback } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import { useDispatch, useSelector } from 'react-redux'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'

import { useAlerts } from '@/components/providers/alerts/AlertsProvider'
import CheckboxListItem from '@/components/List/CheckboxListItem'
import CollapsableList from '@/components/List/CollapsableList'

import {
  findConfigs,
  toggleGear,
  removeGear,
  addGear,
} from '@/redux/gearbox'
import { AppState, ThunkDispatch } from '@/redux/types'

import { metricGears, imperialGears } from '@/constants'

const GearSelector: FC = () => {
  const { formatMessage } = useIntl()
  const { show } = useAlerts()
  const dispatch = useDispatch<ThunkDispatch>()
  const selectedGears = useSelector(({ gearbox }: AppState) => gearbox.selectedGears)
  const customGears = useSelector(({ gearbox }: AppState) => gearbox.customGears)
  const handleGearSelect = useCallback((gear: number) => async () => {
    await dispatch(toggleGear(gear))
    dispatch(findConfigs())
  }, [dispatch])
  const handleGearRemove = useCallback((gear: number) => async () => {
    try {
      const isD = await dispatch(removeGear(gear))
      show({
        message: 'gear deleted',
        onUndo: async () => {
          await dispatch(addGear(gear, isD))
          dispatch(findConfigs())
        },
      })
    } catch (err) {
      show({ type: 'error', message: formatMessage(err.message) })
    }
    dispatch(findConfigs())
  }, [dispatch])

  return (
    <List
      subheader={(
        <ListSubheader sx={{ backgroundColor: 'white', display: { xs: 'none', sm: 'inherit' } }}>
          <FormattedMessage id="gearSelector.gearConfiguration" />
        </ListSubheader>
      )}
      sx={{ width: '100%' }}
    >
      <CollapsableList text={formatMessage({ id: 'gearSelector.metric' })}>
        {metricGears.map((gear) => (
          <CheckboxListItem
            checked={selectedGears.includes(gear)}
            key={gear}
            onClick={handleGearSelect(gear)}
            text={`z = ${gear}`}
          />
        ))}
      </CollapsableList>
      <CollapsableList text={formatMessage({ id: 'gearSelector.imperial' })}>
        {imperialGears.map((gear) => (
          <CheckboxListItem
            checked={selectedGears.includes(gear)}
            key={gear}
            onClick={handleGearSelect(gear)}
            text={`z = ${gear}`}
          />
        ))}
      </CollapsableList>
      <CollapsableList text={formatMessage({ id: 'gearSelector.custom' })}>
        {!customGears.length && (
          <ListItem>
            <ListItemText primary={formatMessage({ id: 'gearSelector.noGears' })} />
          </ListItem>
        )}
        {customGears.map((gear) => (
          <CheckboxListItem
            checked={selectedGears.includes(gear)}
            key={gear}
            onClick={handleGearSelect(gear)}
            onDelete={handleGearRemove(gear)}
            text={`z = ${gear}`}
          />
        ))}
      </CollapsableList>
    </List>
  )
}

export default GearSelector
