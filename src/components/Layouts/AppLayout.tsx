import { FC, ReactNode, useState } from 'react'
import { styled, Theme } from '@mui/material/styles'

import Box from '@mui/material/Box'
import Header from '@/components/Layouts/Panels/Header'
import SideBar from '@/components/Layouts/Panels/Sidebar'

const Offset = styled(Box)(({ theme }: { theme: Theme }) => theme.mixins.toolbar)

export interface AppLayoutProps {
  children: ReactNode
}

const AppLayout: FC<AppLayoutProps> = ({ children }: AppLayoutProps) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Header open={open} onClick={setOpen} />
      <SideBar open={open} />
      <Box
        component="main"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: theme => ({
            lg: `calc(100vh - ${theme.mixins.toolbar['@media (min-width:600px)'].minHeight}px)`,
            md: '100vh',
          }),
          flexGrow: 1,
          transition: theme => theme.transitions.create('margin', {
            easing: open ? theme.transitions.easing.easeOut : theme.transitions.easing.sharp,
            duration: open ? theme.transitions.duration.enteringScreen : theme.transitions.duration.leavingScreen,
          }),
          marginLeft: theme => open ? theme.components.MuiDrawer.defaultProps.PaperProps.sx.width : 0,
        }}
      >
        <Offset />
        {children}
      </Box>
    </>
  )
}

export default AppLayout
