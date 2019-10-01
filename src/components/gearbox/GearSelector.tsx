import React, { FC } from 'react'
import { useIntl } from 'react-intl'
import { useDispatch, useSelector } from 'react-redux'

import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'

import CollapsableList from '@/components/gearbox/CollapsableList'
import CheckboxListItem from '@/components/gearbox/CheckboxListItem'

import { toggleGear } from '@/redux/gearbox'
import { AppState } from '@/redux/types'

import { metricGears, imperialGears } from '@/constants'

const GearSelector: FC = () => {
  const { formatMessage } = useIntl()
  const dispatch = useDispatch()
  const selectedGears = useSelector(({ gearbox }: AppState) => gearbox.selectedGears)

  const WrappedComponent = (
    <List subheader={<ListSubheader>Gears</ListSubheader>}>
      <CollapsableList text={formatMessage({ id: 'gearSelector.metric' })}>
        {metricGears.map(gear => (
          <CheckboxListItem
            key={gear}
            checked={selectedGears.includes(gear)}
            text={`z = ${gear}`}
            onClick={() => dispatch(toggleGear(gear))}
          />
        ))}
      </CollapsableList>
      <CollapsableList text={formatMessage({ id: 'gearSelector.imperial' })}>
        {imperialGears.map(gear => (
          <CheckboxListItem
            key={gear}
            checked={selectedGears.includes(gear)}
            text={`z = ${gear}`}
            onClick={() => dispatch(toggleGear(gear))}
          />
        ))}
      </CollapsableList>
      <CollapsableList text={formatMessage({ id: 'gearSelector.custom' })}>
        <CheckboxListItem checked text="lalal" onClick={() => dispatch(toggleGear(4))} />
      </CollapsableList>
    </List>
  )

  return WrappedComponent
}

export default GearSelector
