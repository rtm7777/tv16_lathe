import React, { FC } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import SpeedDial from '@material-ui/lab/SpeedDial'
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon'
import Grid from '@material-ui/core/Grid'

import GearSelector from '@/components/gearbox/GearSelector'
import GearboxContent from '@/components/gearbox/GearboxContent'
import { useDialogs } from '@/components/providers/DialogsProvider'

const useStyles = makeStyles((theme: Theme) => {
  const { minHeight } = theme.mixins.toolbar['@media (min-width:600px)'] as {} & { minHeight: number }

  return createStyles({
    root: {
      [theme.breakpoints.up('xs')]: { height: 'auto' },
      [theme.breakpoints.up('md')]: { height: `calc(100% - ${minHeight}px)` },
    },
    gears: {
      [theme.breakpoints.up('xs')]: { display: 'none' },
      [theme.breakpoints.up('md')]: {
        display: 'flex',
        height: '100%',
        width: '200px',
        overflow: 'auto',
      },
    },
    content: {
      [theme.breakpoints.up('md')]: {
        width: 'calc(100% - 200px)',
        height: '100%',
      },
    },
    dial: {
      position: 'fixed',
      bottom: '25px',
      right: '25px',
    },
  })
})

const GearboxPage: FC = () => {
  const classes = useStyles({})
  const { open } = useDialogs()

  return (
    <Grid direction="row" container className={classes.root}>
      <Grid item className={classes.gears}>
        <GearSelector />
      </Grid>
      <Grid item className={classes.content}>
        <GearboxContent />
      </Grid>
      <SpeedDial
        open={false}
        onClick={() => open('addGear')}
        ariaLabel="Add Gear"
        icon={<SpeedDialIcon />}
        className={classes.dial}
      />
    </Grid>
  )
}

export default GearboxPage
