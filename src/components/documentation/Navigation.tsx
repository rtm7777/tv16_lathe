import React, { FC, useMemo } from 'react'
import { useIntl } from 'react-intl'
import { makeStyles } from '@material-ui/core/styles'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import CollapsableList from '@/components/List/CollapsableList'
import DownloadListItem from '@/components/List/DownloadListItem'

import { PASSPORTS } from '@/constants'

const useStyles = makeStyles(() => ({
  list: { width: '100%' },
}))

const Navigation: FC = () => {
  const classes = useStyles({})
  const { formatMessage } = useIntl()
  const passports = useMemo(() => Object.entries(PASSPORTS).map(([name, file]) => (
    {
      text: formatMessage({ id: `files.${name}` }),
      path: `/files/${file}`,
    }
  )), [])

  return (
    <List className={classes.list}>
      <ListItem button>
        <ListItemText primary={formatMessage({ id: 'docs.specs' })} />
      </ListItem>
      <CollapsableList text={formatMessage({ id: 'docs.passports' })}>
        {passports.map(({ text, path }) => (
          <DownloadListItem key={text} text={text} path={path} />
        ))}
      </CollapsableList>
    </List>
  )
}

export default Navigation