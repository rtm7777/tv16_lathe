import { FC } from 'react'
import { useLocation } from 'react-router'
import { FormattedMessage } from 'react-intl'

import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import HeaderActions from '@/components/gearbox/HeaderActions'

interface SideBarProps {
  open: boolean
  onClick(open: boolean): void
}

const Header: FC<SideBarProps> = ({ open, onClick }: SideBarProps) => {
  const { pathname } = useLocation()

  return (
    <AppBar position="fixed" sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <IconButton
          aria-label="open drawer"
          color="inherit"
          edge="start"
          onClick={() => onClick(!open)}
          sx={{ marginRight: '36px' }}
        >
          {open ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
        <Typography variant="h6" noWrap>
          <FormattedMessage id={`pages.${pathname}`} />
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        {pathname === '/gearbox' && <HeaderActions />}
      </Toolbar>
    </AppBar>
  )
}

export default Header
