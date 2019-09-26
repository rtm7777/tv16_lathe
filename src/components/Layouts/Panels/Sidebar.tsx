import React, { ReactElement } from 'react'
import clsx from 'clsx'
import { useLocation } from 'react-router'
import { Link, NavLink } from 'react-router-dom'
import { useIntl } from 'react-intl'
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import SettingsIcon from '@material-ui/icons/Settings'
import InfoIcon from '@material-ui/icons/Info'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'
import Tooltip from '@material-ui/core/Tooltip'

const useStyles = makeStyles(theme => ({
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

const SideBar = ({ open }: SideBarProps): ReactElement => {
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
          <ListItem button selected={pathname === '/gearbox'}>
            <NavLink to="/gearbox">
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
            </NavLink>
          </ListItem>
        </Tooltip>
        <Tooltip title={formatMessage({ id: 'sidebar.documentation' })} placement="right">
          <ListItem button selected={pathname === '/documentation'}>
            <Link to="/documentation">
              <ListItemIcon>
                <LibraryBooksIcon />
              </ListItemIcon>
            </Link>
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
