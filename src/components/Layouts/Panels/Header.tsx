import { FC } from 'react'
import clsx from 'clsx'
import { useLocation } from 'react-router'
import { FormattedMessage } from 'react-intl'
import { createStyles, makeStyles } from '@mui/styles'
import { Theme } from '@mui//material/styles'

import AppBar from '@mui/material/AppBar'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import HeaderActions from '@/components/gearbox/HeaderActions'

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

const Header: FC<SideBarProps> = ({ open, onClick }: SideBarProps) => {
  const classes = useStyles({})
  const { pathname } = useLocation()

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
          <FormattedMessage id={`pages.${pathname}`} />
        </Typography>
        <div className={classes.grow} />
        {pathname === '/gearbox' && <HeaderActions />}
      </Toolbar>
    </AppBar>
  )
}

export default Header
