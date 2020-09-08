import React, { FC } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'

import Content from '@/components/documentation/Content'
import Navigation from '@/components/documentation/Navigation'

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
        width: '300px',
        overflow: 'auto',
      },
    },
    content: {
      [theme.breakpoints.up('md')]: {
        width: 'calc(100% - 300px)',
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

const DcumentationPage: FC = () => {
  const classes = useStyles({})

  return (
    <Grid direction="row" container className={classes.root}>
      <Grid item className={classes.navigation}>
        <Navigation />
      </Grid>
      <Grid item className={classes.content}>
        <Content />
      </Grid>
    </Grid>
  )
}

export default DcumentationPage
