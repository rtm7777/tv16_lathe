import React, { FC } from 'react'
import { useIntl } from 'react-intl'

import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'

import CollapsableList from '@/components/gearbox/CollapsableList'
import CheckboxListItem from '@/components/gearbox/CheckboxListItem'

import { metricGears, imperialGears } from '@/constants'

const GearSelector: FC = () => {
  const { formatMessage } = useIntl()
  const handleClick = (value: number): (() => void) => () => {
    console.log(value)
  }

  const WrappedComponent = (
    <List subheader={<ListSubheader>Gears</ListSubheader>}>
      <CollapsableList text={formatMessage({ id: 'gearSelector.metric' })}>
        {metricGears.map(gear => (
          <CheckboxListItem key={gear} checked text={`z = ${gear}`} onClick={handleClick(gear)} />
        ))}
      </CollapsableList>
      <CollapsableList text={formatMessage({ id: 'gearSelector.imperial' })}>
        {imperialGears.map(gear => (
          <CheckboxListItem key={gear} text={`z = ${gear}`} onClick={handleClick(gear)} />
        ))}
      </CollapsableList>
      <CollapsableList text={formatMessage({ id: 'gearSelector.custom' })}>
        <CheckboxListItem checked text="lalal" onClick={handleClick(4)} />
      </CollapsableList>
    </List>
  )

  return WrappedComponent
}

export default GearSelector
