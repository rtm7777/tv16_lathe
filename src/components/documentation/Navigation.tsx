import { FC, useMemo } from 'react'
import { useIntl } from 'react-intl'
import { Link, useLocation } from 'react-router-dom'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

import CollapsableList from '@/components/List/CollapsableList'
import DownloadListItem from '@/components/List/DownloadListItem'

import { PASSPORTS } from '@/constants'

const Navigation: FC = () => {
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
    <List sx={{ width: '100%' }}>
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
