import React, { FC } from 'react'
import { useTable, TableInstance } from 'react-table'
import { useIntl } from 'react-intl'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import GearConfig from '@/db/gearConfig'

import GearboxFilter from '@/components/gearbox/GearboxFilter'
import Table from '@/components/Table/Table'

import columns from '@/components/documentation/specsTableConfig'

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

const Specs: FC = () => {
  const classes = useStyles({})
  const intl = useIntl()
  const data = []

  const table = useTable<any>({
    columns,
    data,
    intl,
  }) as TableInstance<GearConfig>

  return (
    <Grid className={classes.container} container>
      <Table table={table} />
    </Grid>
  )
}

export default Specs
