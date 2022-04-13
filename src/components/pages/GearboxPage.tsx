import { FC } from 'react'
import { makeStyles, createStyles } from '@mui/styles'
import { Theme } from '@mui//material/styles'

import Grid from '@mui/material/Grid'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialIcon from '@mui/material/SpeedDialIcon'

import { useDialogs } from '@/components/providers/dialogs/DialogsProvider'
import GearboxContent from '@/components/gearbox/GearboxContent'
import GearSelector from '@/components/gearbox/GearSelector'

const useStyles = makeStyles((theme: Theme) => {
  const { minHeight } = theme.mixins.toolbar['@media (min-width:600px)'] as Record<string, unknown>
  & { minHeight: number }

  return createStyles({
    root: {
      [theme.breakpoints.up('xs')]: { height: 'auto' },
      [theme.breakpoints.up('md')]: { height: `calc(100% - ${minHeight}px)` },
    },
    navigation: {
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
      <Grid item className={classes.navigation}>
        <GearSelector />
      </Grid>
      <Grid item className={classes.content}>
        <GearboxContent />
      </Grid>
      <SpeedDial
        ariaLabel="Add Gear"
        className={classes.dial}
        icon={<SpeedDialIcon />}
        onClick={() => open('addGear')}
        open={false}
      />
    </Grid>
  )
}

export default GearboxPage
