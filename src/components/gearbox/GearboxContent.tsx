import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { useTable, TableInstance } from 'react-table'
import { useIntl } from 'react-intl'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import GearConfig from '@/db/gearConfig'

import GearboxFilter from '@/components/gearbox/GearboxFilter'
import Table from '@/components/Table/Table'

import { AppState } from '@/redux/types'
import columns from '@/components/gearbox/gearsTableConfig'

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
  const intl = useIntl()
  const { configs } = useSelector(({ gearbox }: AppState) => gearbox)

  const table = useTable<any>({
    columns,
    data: configs,
    intl,
  }) as TableInstance<GearConfig>

  return (
    <Grid className={classes.container} container>
      <Grid className={classes.controls} item xs={12}>
        <GearboxFilter />
      </Grid>
      <Grid className={classes.table} item xs={12}>
        <Table table={table} />
      </Grid>
    </Grid>
  )
}

export default GearboxContent
