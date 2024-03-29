import { FC, useMemo } from 'react'
import { useIntl } from 'react-intl'
import { Link, useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import CollapsableList from '@/components/List/CollapsableList'
import DownloadListItem from '@/components/List/DownloadListItem'

import { PASSPORTS } from '@/constants'

const useStyles = makeStyles(() => ({ list: { width: '100%' } }))

const Navigation: FC = () => {
  const classes = useStyles({})
  const { formatMessage } = useIntl()
  const { pathname } = useLocation()
  const passports = useMemo(() => Object.entries(PASSPORTS).map(([name, file]) => (
    {
      filePath: `/data/passports/${file}`,
      route: `/documentation/passport/${name}`,
      text: formatMessage({ id: `files.${name}` }),
    }
  )), [])

  return (
    <List className={classes.list}>
      <ListItem
        button
        component={Link}
        selected={pathname.includes('/specs')}
        to="/documentation/specs"
      >
        <ListItemText primary={formatMessage({ id: 'docs.specs' })} />
      </ListItem>
      <CollapsableList text={formatMessage({ id: 'docs.passports' })}>
        {passports.map(({ filePath, route, text }) => (
          <DownloadListItem
            filePath={filePath}
            key={filePath}
            route={route}
            text={text}
          />
        ))}
      </CollapsableList>
    </List>
  )
}

export default Navigation
