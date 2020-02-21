import React, { FC } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    [theme.breakpoints.up('md')]: { height: '100%' },
  },
  controls: {
    [theme.breakpoints.up('sm')]: { height: '100px' },
  },
  table: {
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 100px)',
      overflow: 'auto',
    },
  },
}))

const GearboxContent: FC = () => {
  const classes = useStyles({})

  return (
    <Grid className={classes.container} container>
      <Grid className={classes.controls} item xs={12}>
        header blablabalb
      </Grid>
      <Grid className={classes.table} item xs={12}>
        blablabal
      </Grid>
    </Grid>
  )
}

export default GearboxContent
