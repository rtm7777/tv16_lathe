import React, { FC } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import { Theme, makeStyles } from '@material-ui/core/styles'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import CollapsableList from '@/components/gearbox/CollapsableList'

const useStyles = makeStyles((theme: Theme) => ({
  list: { width: '100%' },
  subHeader: {
    backgroundColor: 'white',
    [theme.breakpoints.up('xs')]: { display: 'none' },
    [theme.breakpoints.up('sm')]: { display: 'inherit' },
  },
}))

const GearSelector: FC = () => {
  const classes = useStyles({})
  const { formatMessage } = useIntl()

  return (
    <List className={classes.list}>
      <CollapsableList text={formatMessage({ id: 'docs.specs' })}>
        <ListItem>
          <ListItemText primary={formatMessage({ id: 'docs.specs' })} />
        </ListItem>
      </CollapsableList>
      <CollapsableList text={formatMessage({ id: 'docs.passports' })}>
        <ListItem>
          <ListItemText primary={formatMessage({ id: 'docs.passports' })} />
        </ListItem>
      </CollapsableList>
    </List>
  )
}

export default GearSelector
