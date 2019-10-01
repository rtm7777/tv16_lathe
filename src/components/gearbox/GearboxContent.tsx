import React, { FC } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import GearsTable from '@/components/gearbox/GearsTable'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    [theme.breakpoints.up('md')]: { height: '100%' },
  },
  controls: {
    [theme.breakpoints.up('md')]: { height: '150px' },
  },
  table: {
    [theme.breakpoints.up('md')]: {
      height: 'calc(100% - 150px)',
      overflow: 'auto',
    },
  },
}))

const GearboxContent: FC = () => {
  const classes = useStyles({})

  return (
    <Grid className={classes.container} container>
      <Grid className={classes.controls} item xs={12}>
        lldfhd
      </Grid>
      <Grid className={classes.table} item xs={12}>
        <GearsTable
          data={[
            {
              a: 1,
              b: 2,
              c: 367,
              d: 100,
              feed: 0.046153846153846156,
              pmm: 0.046153846153846156,
              tpi: 70.046153846153846156,
            },
            { a: 2, b: 7, c: 5, d: 100, feed: 46, pmm: 57, tpi: 33 },
            { a: 3, b: 7, c: 5, d: 100, feed: 46, pmm: 57, tpi: 33 },
            { a: 4, b: 7, c: 5, d: 100, feed: 46, pmm: 57, tpi: 33 },
            { a: 5, b: 7, c: 5, d: 100, feed: 46, pmm: 57, tpi: 33 },
            { a: 6, b: 7, c: 5, d: 100, feed: 46, pmm: 57, tpi: 33 },
            { a: 7, b: 7, c: 5, d: 100, feed: 46, pmm: 57, tpi: 33 },
            { a: 8, b: 7, c: 5, d: 100, feed: 46, pmm: 57, tpi: 33 },
            { a: 9, b: 7, c: 5, d: 100, feed: 46, pmm: 57, tpi: 33 },
            { a: 10, b: 7, c: 5, d: 100, feed: 46, pmm: 57, tpi: 33 },
            { a: 11, b: 7, c: 5, d: 100, feed: 46, pmm: 57, tpi: 33 },
            { a: 681, b: 7, c: 5, d: 100, feed: 46, pmm: 77, tpi: 33 },
            { a: 682, b: 7, c: 5, d: 100, feed: 46, pmm: 77, tpi: 33 },
            { a: 683, b: 7, c: 5, d: 100, feed: 46, pmm: 77, tpi: 33 },
            { a: 684, b: 7, c: 5, d: 100, feed: 46, pmm: 77, tpi: 33 },
            { a: 685, b: 7, c: 5, d: 100, feed: 46, pmm: 77, tpi: 33 },
            { a: 686, b: 7, c: 5, d: 100, feed: 46, pmm: 77, tpi: 33 },
            { a: 12, b: 7, c: 5, d: 100, feed: 46, pmm: 57, tpi: 33 },
            { a: 13, b: 7, c: 5, d: 100, feed: 46, pmm: 57, tpi: 33 },
            { a: 14, b: 7, c: 5, d: 100, feed: 46, pmm: 57, tpi: 33 },
            { a: 15, b: 7, c: 5, d: 100, feed: 46, pmm: 57, tpi: 33 },
            { a: 16, b: 7, c: 5, d: 100, feed: 46, pmm: 57, tpi: 33 },
            { a: 17, b: 7, c: 5, d: 100, feed: 46, pmm: 57, tpi: 33 },
            { a: 18, b: 7, c: 5, d: 100, feed: 46, pmm: 57, tpi: 33 },
            { a: 19, b: 7, c: 5, d: 100, feed: 46, pmm: 57, tpi: 33 },
            { a: 21, b: 7, c: 5, d: 100, feed: 46, pmm: 57, tpi: 33 },
            { a: 22, b: 7, c: 5, d: 100, feed: 46, pmm: 57, tpi: 33 },
            { a: 23, b: 7, c: 5, d: 100, feed: 46, pmm: 57, tpi: 33 },
            { a: 24, b: 7, c: 5, d: 100, feed: 46, pmm: 57, tpi: 33 },
            { a: 61, b: 7, c: 5, d: 100, feed: 46, pmm: 57, tpi: 33 },
            { a: 62, b: 7, c: 5, d: 100, feed: 46, pmm: 57, tpi: 33 },
            { a: 63, b: 7, c: 5, d: 100, feed: 46, pmm: 57, tpi: 33 },
            { a: 64, b: 7, c: 5, d: 100, feed: 46, pmm: 57, tpi: 33 },
            { a: 65, b: 7, c: 5, d: 100, feed: 46, pmm: 57, tpi: 33 },
            { a: 66, b: 7, c: 5, d: 100, feed: 46, pmm: 57, tpi: 33 },
            { a: 67, b: 7, c: 5, d: 100, feed: 46, pmm: 57, tpi: 33 },
            { a: 68, b: 7, c: 5, d: 100, feed: 46, pmm: 57, tpi: 33 },
            { a: 69, b: 7, c: 5, d: 100, feed: 46, pmm: 57, tpi: 33 },
            { a: 60, b: 7, c: 5, d: 100, feed: 46, pmm: 57, tpi: 33 },
            { a: 45, b: 7, c: 5, d: 100, feed: 46, pmm: 57, tpi: 33 },
            { a: 91, b: 7, c: 5, d: 100, feed: 46, pmm: 57, tpi: 33 },
            { a: 92, b: 7, c: 5, d: 100, feed: 46, pmm: 57, tpi: 33 },
            { a: 93, b: 7, c: 5, d: 100, feed: 46, pmm: 57, tpi: 33 },
            { a: 94, b: 7, c: 5, d: 100, feed: 46, pmm: 57, tpi: 33 },
            { a: 95, b: 7, c: 5, d: 100, feed: 46, pmm: 57, tpi: 33 },
            { a: 96, b: 7, c: 5, d: 100, feed: 46, pmm: 57, tpi: 33 },
            { a: 97, b: 7, c: 5, d: 100, feed: 46, pmm: 57, tpi: 33 },
            { a: 98, b: 7, c: 5, d: 100, feed: 46, pmm: 57, tpi: 33 },
            { a: 99, b: 7, c: 5, d: 100, feed: 46, pmm: 57, tpi: 33 },
            { a: 90, b: 7, c: 5, d: 100, feed: 46, pmm: 57, tpi: 33 },
            { a: 50, b: 7, c: 5, d: 100, feed: 46, pmm: 57, tpi: 33 },
            { a: 51, b: 7, c: 5, d: 100, feed: 46, pmm: 57, tpi: 33 },
            { a: 52, b: 7, c: 5, d: 100, feed: 46, pmm: 57, tpi: 33 },
            { a: 853, b: 7, c: 5, d: 100, feed: 46, pmm: 77, tpi: 33 },
            { a: 854, b: 7, c: 5, d: 100, feed: 46, pmm: 77, tpi: 33 },
            { a: 855, b: 7, c: 5, d: 100, feed: 46, pmm: 77, tpi: 33 },
            { a: 856, b: 7, c: 5, d: 100, feed: 46, pmm: 77, tpi: 33 },
            { a: 857, b: 7, c: 5, d: 100, feed: 46, pmm: 77, tpi: 33 },
            { a: 858, b: 7, c: 5, d: 100, feed: 46, pmm: 77, tpi: 33 },
            { a: 859, b: 7, c: 5, d: 100, feed: 46, pmm: 77, tpi: 33 },
            { a: 875, b: 7, c: 5, d: 100, feed: 46, pmm: 77, tpi: 33 },
            { a: 885, b: 7, c: 5, d: 100, feed: 46, pmm: 77, tpi: 33 },
            { a: 895, b: 7, c: 5, d: 100, feed: 46, pmm: 77, tpi: 33 },
            { a: 815, b: 7, c: 5, d: 100, feed: 46, pmm: 77, tpi: 33 },
            { a: 185, b: 7, c: 5, d: 100, feed: 46, pmm: 77, tpi: 33 },
            { a: 285, b: 7, c: 5, d: 100, feed: 46, pmm: 77, tpi: 33 },
          ]}
        />
      </Grid>
    </Grid>
  )
}

export default GearboxContent
