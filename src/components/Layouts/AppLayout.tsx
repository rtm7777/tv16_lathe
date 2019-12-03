import React, { FC } from 'react'
import clsx from 'clsx'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import Header from '@/components/Layouts/Panels/Header'
import SideBar from '@/components/Layouts/Panels/Sidebar'

const useStyles = makeStyles((theme: Theme) => {
  const { width } = theme.overrides.MuiDrawer.paper as {} & { width: string }
  const { minHeight } = theme.mixins.toolbar['@media (min-width:600px)'] as {} & { minHeight: number }

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

const AppLayout: FC = ({ children }) => {
  const classes = useStyles({})
  const [open, setOpen] = React.useState(false)
  const WrappedComponent = (
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
  return WrappedComponent
}

export default AppLayout
