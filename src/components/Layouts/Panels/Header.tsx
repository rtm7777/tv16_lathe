import React, { ReactElement } from 'react'
import clsx from 'clsx'
import { useLocation } from 'react-router'
import { FormattedMessage } from 'react-intl'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import TuneIcon from '@material-ui/icons/Tune'
import Typography from '@material-ui/core/Typography'

import { useDialogs } from '@/components/providers/DialogsProvider'

const useStyles = makeStyles((theme: Theme) => createStyles({
  appBar: { zIndex: theme.zIndex.drawer + 1 },
  menuButton: { marginRight: 36 },
  grow: { flexGrow: 1 },
  mobileSection: {
    [theme.breakpoints.up('sm')]: { display: 'none' },
  },
}))

interface SideBarProps {
  open: boolean
  onClick(open: boolean): void
}

const Header = ({ open, onClick }: SideBarProps): ReactElement => {
  const classes = useStyles({})
  const { pathname } = useLocation()
  const dialogs = useDialogs()

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          aria-label="open drawer"
          className={clsx(classes.menuButton)}
          color="inherit"
          edge="start"
          onClick={() => onClick(!open)}
        >
          {open ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
        <Typography variant="h6" noWrap>
          <FormattedMessage id={`pages.${pathname.slice(1)}`} />
        </Typography>
        <div className={classes.grow} />
        {pathname === '/gearbox' && (
          <div className={classes.mobileSection}>
            <IconButton aria-label="change gears" color="inherit" onClick={() => dialogs.open('gearSelector')}>
              <TuneIcon />
            </IconButton>
          </div>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Header
