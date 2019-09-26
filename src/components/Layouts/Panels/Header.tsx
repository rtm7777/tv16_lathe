import React, { ReactElement } from 'react'
import { useLocation } from 'react-router'
import clsx from 'clsx'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { FormattedMessage } from 'react-intl'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: { zIndex: theme.zIndex.drawer + 1 },
    menuButton: { marginRight: 36 },
  }),
)

interface SideBarProps {
  open: boolean
  onClick(open: boolean): void
}

const Header = ({ open, onClick }: SideBarProps): ReactElement => {
  const classes = useStyles({})
  const { pathname } = useLocation()

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => onClick(!open)}
          edge="start"
          className={clsx(classes.menuButton)}
        >
          {open ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
        <Typography variant="h6" noWrap>
          <FormattedMessage id={`pages.${pathname.slice(1)}`} />
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
