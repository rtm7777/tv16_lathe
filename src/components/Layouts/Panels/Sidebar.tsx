import { FC } from 'react'
import clsx from 'clsx'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import { useIntl } from 'react-intl'
import { makeStyles } from '@mui/material/styles'

import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import InfoIcon from '@mui/icons-material/Info'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import SettingsIcon from '@mui/icons-material/Settings'
import Tooltip from '@mui/material/Tooltip'

const useStyles = makeStyles((theme) => ({
  drawerOpen: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: 0,
  },
  toolbar: {
    display: 'flex',
    ...theme.mixins.toolbar,
  },
}))

interface SideBarProps {
  open: boolean
}

const SideBar: FC<SideBarProps> = ({ open }: SideBarProps) => {
  const classes = useStyles({})
  const { pathname } = useLocation()
  const { formatMessage } = useIntl()

  return (
    <Drawer
      variant="permanent"
      className={clsx({
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
      open={open}
    >
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <Tooltip title={formatMessage({ id: 'sidebar.gearbox' })} placement="right">
          <ListItem
            button
            component={Link}
            selected={pathname === '/gearbox'}
            to="/gearbox"
          >
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
          </ListItem>
        </Tooltip>
        <Tooltip title={formatMessage({ id: 'sidebar.documentation' })} placement="right">
          <ListItem
            button
            component={Link}
            selected={pathname.startsWith('/documentation')}
            to="/documentation"
          >
            <ListItemIcon>
              <LibraryBooksIcon />
            </ListItemIcon>
          </ListItem>
        </Tooltip>
      </List>
      <Divider />
      <List>
        <Tooltip title={formatMessage({ id: 'sidebar.info' })} placement="right">
          <ListItem button>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
          </ListItem>
        </Tooltip>
      </List>
    </Drawer>
  )
}

export default SideBar
