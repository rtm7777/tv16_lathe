import { FC, ReactNode, useState } from 'react'
import clsx from 'clsx'
import { createStyles, makeStyles, Theme } from '@mui/material/styles'

import Header from '@/components/Layouts/Panels/Header'
import SideBar from '@/components/Layouts/Panels/Sidebar'

const useStyles = makeStyles((theme: Theme) => {
  const { width } = theme.overrides.MuiDrawer.paper as Record<string, unknown> & { width: string }
  const { minHeight } = theme.mixins.toolbar['@media (min-width:600px)'] as Record<string, unknown>
  & { minHeight: number }

  return createStyles({
    toolbar: theme.mixins.toolbar,
    content: {
      display: 'flex',
      flexDirection: 'column',
      height: `calc(100vh - ${minHeight}px)`,
      [theme.breakpoints.up('md')]: { height: '100vh' },
      flexGrow: 1,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: 0,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: width,
    },
  })
})

export interface AppLayoutProps {
  children: ReactNode
}

const AppLayout: FC = ({ children }: AppLayoutProps) => {
  const classes = useStyles({})
  const [open, setOpen] = useState(false)
  return (
    <>
      <Header open={open} onClick={setOpen} />
      <SideBar open={open} />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.toolbar} />
        {children}
      </main>
    </>
  )
}

export default AppLayout
